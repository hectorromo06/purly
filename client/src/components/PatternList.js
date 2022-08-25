import React from 'react';
import { Link } from 'react-router-dom';

function PatternList(props) {
  // get patterns
  const { patterns = [] } = props;
  return (
    <div id="patterns">
      {
        patterns.map((pattern) => (
          <div class="pattern-info">
            <Link to={`/pattern/${pattern._id}`}>
            <h3>{pattern.name}</h3>
            </Link>
            <p>Created by {pattern.username} on {pattern.createdAt}</p>
            <h4>Description</h4>
            <p>{pattern.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default PatternList;