import React, { useState, useEffect } from 'react';
import './scoreBar.css'

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
