import React, { useState, useEffect } from 'react';

const cardContainer = (props) => {
  console.log(props);
  const createCards = () => {
    return props.cards.map((card) => {
      return (
        <div>
          <p>{card.name}</p>
        </div>
      );
    });
  };
  return <div>{createCards()}</div>;
};

export default cardContainer;
