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
            {pattern.name}
          </div>
        ))
      }
    </div>
  )
}

export default PatternList;