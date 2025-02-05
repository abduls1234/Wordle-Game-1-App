import React from 'react';
import LetterBox from './LetterBox.js';

const getColors = (guess, targetWord) => {
  const colors = Array(guess.length).fill('gray');
  const targetWordArray = targetWord.split('');
  const guessArray = guess.split('');

  guessArray.forEach((letter, index) => {
    if (letter === targetWordArray[index]) {
      colors[index] = 'green';
      targetWordArray[index] = null;
      guessArray[index] = null;
    }
  });

  guessArray.forEach((letter, index) => {
    if (letter && targetWordArray.includes(letter)) {
      colors[index] = 'yellow';
      targetWordArray[targetWordArray.indexOf(letter)] = null;
    }
  });

  return colors;
};

const GuessRow = ({ guess, targetWord }) => {
  const colors = getColors(guess, targetWord);

  return (
    <div className="guess-row">
      {guess.split('').map((letter, index) => (
        <LetterBox key={index} letter={letter} color={colors[index]} />
      ))}
    </div>
  );
};

export default GuessRow;