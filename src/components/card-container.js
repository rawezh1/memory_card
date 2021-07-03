import React from 'react';
import './cardContainer.css'

// Creates a container with six cards, each card is a div with an image
const CardContainer = (props) => {
  const createCards = () => {
    return props.cards.map((card,index) => {
      return (
        <div key={index}>
          <img className='card-image' id={card.name} src={card.src} alt='' onClick={props.clickHandler}></img>
        </div>
      );
    });
  };
  return <div id='CardContainer'>{createCards()}</div>;
};

export default CardContainer;
