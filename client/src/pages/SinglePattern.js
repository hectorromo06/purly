import React from 'react';

// import PatternList from '../components/PatternList';
import { useQuery } from '@apollo/client';

import { QUERY_PATTERNS } from '../utils/queries';
import { useParams } from 'react-router-dom';

const SinglePattern = (props) => {
    const { id: patternId } = useParams();
    const { loading, data } = useQuery(QUERY_PATTERNS, {
        variables: { id: patternId },
      });

    const pattern = data?.pattern || {};

    if (loading) {
     return <div>Loading...</div>;
    }

    // Image tag should be added soon
 return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {pattern.username}
          </span>{' '}
          Selected on {pattern.createdAt}
        </p>
        <h3>Materials needed:</h3>
        <ul>
            <li>
            {pattern.needle}
            </li>
            <li>
            {pattern.weight}
            </li>
        </ul>
        <div className="card-body">
          <p>{pattern.description}</p>
        </div>
        <div className="card-body">
          <p>{pattern.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePattern;