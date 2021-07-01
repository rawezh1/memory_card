import './App.css';
import React, { useState, useEffect } from 'react';
import ScoreBar from './components/score-bar';
import CardContainer from './components/card-container';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const planetArray = [
    { name: 'Mercury', clicked: false, position: 0 },
    { name: 'Venus', clicked: false, position: 1  },
    { name: 'Earth',clicked: false, position: 2 },
    { name: 'Mars',clicked: false, position: 3 },
    { name: 'Jupiter',clicked: false, position: 4 },
    { name: 'Saturn',clicked: false, position: 5 },
  ];
  const [cards, setCards] = useState(planetArray);
  const clickHandler = (e) => {
    const index = cards.findIndex(x => x.name === e.target.textContent)
    console.log(index);
  };
  return (
    <div className='App'>
      <ScoreBar currentScore={score} bestScore={bestScore} />
      <CardContainer cards={cards} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
