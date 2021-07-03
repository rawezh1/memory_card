import React from 'react';
import './scoreBar.css'


// Creates a score bar which consists of two divs with a p-tag showing current score and
// best score
const ScoreBar = (props) => {
  return (
    <div id='ScoreBar'>
      <div id='Score'>
        <p>Score: {props.currentScore}</p>
      </div>
      <div id='BestScore'>
        <p>Best Score: {props.bestScore}</p>
      </div>
    </div>
  );
};

export default ScoreBar;
