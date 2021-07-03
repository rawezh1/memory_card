import './App.css';
import React, { useState } from 'react';
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
  // Set initial score to zero
  const [score, setScore] = useState(0);

  // Set initial best score to zero
  const [bestScore, setBestScore] = useState(0);

  // An array of planets to be used for creating the planet cards
  const planetArray = [
    { name: 'mercury', clicked: false, position: 0,src:mercury },
    { name: 'venus', clicked: false, position: 1,src:venus },
    { name: 'earth', clicked: false, position: 2,src:earth },
    { name: 'mars', clicked: false, position: 3,src:mars },
    { name: 'jupiter', clicked: false, position: 4,src: jupiter },
    { name: 'saturn', clicked: false, position: 5,src: saturn },
  ];

  // Set initial set of cards to planetArray
  const [cards, setCards] = useState(planetArray);

  // A function which runs every time a card is clicked
  const clickHandler = (e) => {
    // Get index of clicked card in cards
    const index = cards.findIndex((x) => x.name === e.target.id);

    // If this card was not clicked before increase score and reshuffle,
    // else check best score; set score to 0 and reshuffle.
    if (!cards[index].clicked) {
      setScore(score + 1);
      // Set this card to clicked
      cards[index].clicked = true;
      setCards(shuffle(cards));
    } else {
      // If current score is better than previous best score then set best score to this one
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setCards(shuffle(planetArray));
    }
  };


  // Reshuffle array 
  function shuffle(array) {
    let thisCard = array.length;
    let rndCard;

    // While cards remain 
    while (thisCard) {
      // Pick a random card and decrement number of remaining cards
      rndCard = ~~(Math.random() * thisCard);
      thisCard--;
      // Replace current card position with random card poistion
      [array[thisCard].position, array[rndCard].position] = [
        array[rndCard].position,
        array[thisCard].position,
      ];
      // Replace current card with random card
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
