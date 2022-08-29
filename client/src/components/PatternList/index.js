import React from 'react';
import { Link } from 'react-router-dom';

function PatternList(props) {
  // get patterns
  const { patterns = [] } = props;
  return (
    <div className="patterns">
      {
        patterns.map((pattern) => (
          <div className="pattern-info">
            <Link to={`/pattern/${pattern._id}`}>
            <h3>{pattern.name}</h3>
            </Link>
            <p className='pattern-description'>Created by {pattern.username} on {pattern.createdAt}</p>
            <h4 className='pattern-description'>Description</h4>
            <p>{pattern.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default PatternList;