import React from 'react';

const NewGameButton = ({ onClick }) => {
  return (
    <button className="new-game-button" onClick={onClick}>
      New Game
    </button>
  );
};

export default NewGameButton;