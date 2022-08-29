import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_PATTERN } from '../utils/queries';

import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import CommentList from "../components/CommentList"
import CommentForm from '../components/CommentForm';

const SinglePattern = (props) => {
    
    const { id: patternId } = useParams();
    const { loading, data } = useQuery(QUERY_PATTERN, {
        variables: { id: patternId },
      });
    
    
    const pattern = data?.pattern || [];

    console.log(patternId);
    console.log(pattern);

    // navigate to pattern page if username is yours
    
    if (loading) {
     return <div>Loading...</div>;
    }
  


    // Image tag should be added soon
    
 return (
    <div>
      <div className="single-pattern">
        <div className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            <h2>{pattern.name}</h2>
          </span>{' '}
          <p className='pattern-info'>Created by {pattern.username} on {pattern.createdAt}</p>
        </div>
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

      <CommentList comments = {pattern.comments}/>
      {Auth.loggedIn() && <CommentForm patternId = {pattern._id}/>}
        
      
    </div>
  );
}

export default SinglePattern;