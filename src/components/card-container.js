import React, { useState, useEffect } from 'react';

const CardContainer = (props) => {
  const createCards = () => {
    return props.cards.map((card,index) => {
      return (
        <div key={index}>
          <p onClick={props.clickHandler}>{card.name}</p>
        </div>
      );
    });
  };
  return <div>{createCards()}</div>;
};

export default CardContainer;
