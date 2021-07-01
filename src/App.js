import './App.css';
import React, { useState, useEffect } from "react";
import ScoreBar from './components/score-bar';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  return (
    <div className="App">
      <ScoreBar currentScore={score} bestScore={bestScore}/>
    </div>
  );
}

export default App;
