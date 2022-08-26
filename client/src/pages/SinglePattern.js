import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_PATTERN } from '../utils/queries';
import { useParams } from 'react-router-dom';

const SinglePattern = (props) => {
    const { id: patternId } = useParams();
    const { loading, data } = useQuery(QUERY_PATTERN, {
        variables: { _id: patternId },
      });

    const pattern = data?.pattern || {};

    if (loading) {
     return <div>Loading...</div>;
    }

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
    </div>

    // ADD COMMENT FUNCTIONALITY
  );
}

export default SinglePattern;