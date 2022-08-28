import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { QUERY_PATTERN } from '../utils/queries';
import { ADD_COMMENT } from '../utils/mutations';
import { Navigate, useParams } from 'react-router-dom';
import CommentForm from '../components/Comments';
import Auth from '../utils/auth';

const SinglePattern = (props) => {
    const { username: userParam } = useParams();
    const [addComment] = useMutation(ADD_COMMENT);
    const { id: patternId } = useParams();
    const { loading, data } = useQuery(QUERY_PATTERN, userParam ? QUERY_USER : QUERY_ME , {
        variables: { _id: patternId, username: userParam },
      });
    
    const user = data?.me || data?.user || {};
    const pattern = data?.pattern || {};

    // navigate to pattern page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/pattern/:id/user" />;
    }
    if (loading) {
     return <div>Loading...</div>;
    }
  

    // if (!user?.username) {
    //   return (
    //     <h4>
    //       You need to be logged in to see this. Use the navigation links above to
    //       sign up or log in!
    //     </h4>
    //   );
    // }

    const handleClick = async () => {
      try {
        await addComment({
          variables: { id: user._id },
        });
      } catch (e) {
        console.error(e);
      }
    };

    // Image tag should be added soon
 return (
    <div>
      <div className="single-pattern">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {pattern.username}
          </span>{' '}
          Selected on {pattern.createdAt}
        </p>
        <h3>Materials needed:</h3>
        
        <div className="card-body">
          <p>{pattern.description}</p>
        </div>
        <div className="card-body">
          {/* MAP over instructions its just a string rn */}
          <p>{pattern.instructions}</p>
        </div>
      </div>
      
      {/* COMMENTS */}
      <div className="comment-content">
        <h2 className="">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        <CommentForm />

        {userParam && (
          <button className="add-comment" onClick={handleClick}>
            Add Comment
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePattern;