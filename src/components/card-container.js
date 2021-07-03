import React, { useState, useEffect } from 'react';
import './cardContainer.css'
import mercury from './Mercury.png'
import earth from './Earth.png'
import venus from './Venus.png'
import mars from './Mars.png'
import jupiter from './Jupiter.png'
import saturn from './Saturn.png'

const CardContainer = (props) => {
  const createCards = () => {
    return props.cards.map((card,index) => {
      return (
        <div key={index}>
          <img class='card-image' id={card.name} src={card.src} alt='' onClick={props.clickHandler}></img>
        </div>
      );
    });
  };
  return <div id='CardContainer'>{createCards()}</div>;
};

export default CardContainer;
