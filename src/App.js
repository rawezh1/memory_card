import './App.css';
import React, { useState, useEffect } from 'react';
import ScoreBar from './components/score-bar';
import CardContainer from './components/card-container';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const planetArray = [
    { name: 'Mercury' },
    { name: 'Venus' },
    { name: 'Earth' },
    { name: 'Mars' },
    { name: 'Jupiter' },
    { name: 'Saturn' },
  ];
  const [cards, setCards] = useState(planetArray);
  return (
    <div className='App'>
      <ScoreBar currentScore={score} bestScore={bestScore} />
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
