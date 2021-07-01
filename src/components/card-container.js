import React, { useState, useEffect } from 'react';

const CardContainer = (props) => {
  console.log(props);
  const createCards = () => {
    return props.cards.map((card,index) => {
      return (
        <div key={index}>
          <p>{card.name}</p>
        </div>
      );
    });
  };
  return <div>{createCards()}</div>;
};

export default CardContainer;
