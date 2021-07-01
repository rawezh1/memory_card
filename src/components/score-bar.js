import React, { useState, useEffect } from 'react';

const ScoreBar = (props) => {
  return (
    <div>
      <div>
        <p>{props.currentScore}</p>
      </div>
      <div>
        <p>{props.bestScore}</p>
      </div>
    </div>
  );
};

export default ScoreBar;
