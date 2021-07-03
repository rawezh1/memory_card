import './App.css';
import React, { useState, useEffect } from 'react';
import ScoreBar from './components/score-bar';
import CardContainer from './components/card-container';
import Title from './components/title';
import mercury from './components/Mercury.png'
import earth from './components/Earth.png'
import venus from './components/Venus.png'
import mars from './components/Mars.png'
import jupiter from './components/Jupiter.png'
import saturn from './components/Saturn.png'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const planetArray = [
    { name: 'mercury', clicked: false, position: 0,src:mercury },
    { name: 'venus', clicked: false, position: 1,src:venus },
    { name: 'earth', clicked: false, position: 2,src:earth },
    { name: 'mars', clicked: false, position: 3,src:mars },
    { name: 'jupiter', clicked: false, position: 4,src: jupiter },
    { name: 'saturn', clicked: false, position: 5,src: saturn },
  ];
  const [cards, setCards] = useState(planetArray);
  const clickHandler = (e) => {
    const index = cards.findIndex((x) => x.name === e.target.id);

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
    <div className='App' style={{margin:0,padding:0}}>
      <Title />
      <ScoreBar currentScore={score} bestScore={bestScore} />
      <CardContainer cards={cards} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
