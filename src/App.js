import './App.css';
import React, { useState, useEffect } from 'react';
import ScoreBar from './components/score-bar';
import CardContainer from './components/card-container';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const planetArray = [
    { name: 'Mercury', clicked: false, position: 0 },
    { name: 'Venus', clicked: false, position: 1 },
    { name: 'Earth', clicked: false, position: 2 },
    { name: 'Mars', clicked: false, position: 3 },
    { name: 'Jupiter', clicked: false, position: 4 },
    { name: 'Saturn', clicked: false, position: 5 },
  ];
  const [cards, setCards] = useState(planetArray);
  const clickHandler = (e) => {
    const index = cards.findIndex((x) => x.name === e.target.textContent);

    if (!cards[index].clicked) {
      setScore(score + 1);
      cards[index].clicked = true;
      setCards(shuffle(cards));
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setCards(shuffle(planetArray));
    }
    console.log(cards);
  };

  function shuffle(array) {
    let thisCard = array.length;
    let rndCard;

    while (thisCard) {
      rndCard = ~~(Math.random() * thisCard);
      thisCard--;
      [array[thisCard].position, array[rndCard].position] = [
        array[rndCard].position,
        array[thisCard].position,
      ];
      [array[thisCard], array[rndCard]] = [array[rndCard], array[thisCard]];
    }
    return array;
  }

  return (
    <div className='App'>
      <ScoreBar currentScore={score} bestScore={bestScore} />
      <CardContainer cards={cards} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
