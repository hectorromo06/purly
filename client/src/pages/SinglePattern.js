import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PATTERN } from '../utils/queries';
import { ADD_COMMENT } from '../utils/mutations';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const SinglePattern = (props) => {
    
    const [addComment] = useMutation(ADD_COMMENT);
    const { id: patternId } = useParams();
    const { loading, data } = useQuery(QUERY_PATTERN, {
        variables: { id: patternId },
      });
    
    
    const pattern = data?.pattern || [];

    console.log(patternId);
    console.log(pattern);

    // navigate to pattern page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username) {
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

    // const handleClick = async () => {
    //   try {
    //     await addComment({
    //       variables: { id: user._id },
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };

    // Image tag should be added soon
    
 return (
    <div>
      <div className="single-pattern">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            <h2>{pattern.name}</h2>
          </span>{' '}
          Created by {pattern.username} on {pattern.createdAt}
        </p>
        <p>
          Made for: {pattern.madeFor}
        </p>
        <p>
          Project: {pattern.project}
        </p>
        <p>
          Skill Level: {pattern.skill}
        </p>
        <div className=''>
          <h3>Description:</h3>
        {pattern.description}
        </div>
        <h3>Materials needed:</h3>
        <p>
          Needle size: {pattern.needle.size}
        </p>
        <p>
          Yarn: {pattern.weight.name} {pattern.color.name} {pattern.fiber.name}
        </p>
        <h3>Instructions:</h3>
        {pattern.instructions}
      </div>

      <div>
        {/* COMMENT COMPONENT */}
      </div>
      
    </div>
  );
}

export default SinglePattern;