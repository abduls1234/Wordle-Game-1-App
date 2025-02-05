import React, { useState, useEffect } from 'react';
import GuessRow from './GuessRow.js';
import NewGameButton from './NewGameButton.js';

const WORDS = ['apple', 'brave', 'crane', 'dwarf', 'eagle'];

const fetchRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
};

const Game = () => {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTargetWord(fetchRandomWord());
  }, []);

  const handleGuessChange = (e) => {
    setCurrentGuess(e.target.value.toLowerCase());
  };

  const handleGuessSubmit = () => {
    if (currentGuess.length !== 5) {
      setMessage('Guess must be 5 letters long');
      return;
    }
    if (!WORDS.includes(currentGuess)) {
      setMessage('Not a valid word');
      return;
    }
    if (currentGuess === targetWord) {
      setMessage('Congratulations, you won!');
      setGameOver(true);
    } else {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
      if (guesses.length + 1 === 6) {
        setMessage(`Out of attempts! The word was "${targetWord}".`);
        setGameOver(true);
      }
    }
  };

  const handleNewGame = () => {
    setTargetWord(fetchRandomWord());
    setGuesses([]);
    setCurrentGuess('');
    setGameOver(false);
    setMessage('');
  };

  return (
    <div className="game">
      {message && <div className="message">{message}</div>}
      {guesses.map((guess, index) => (
        <GuessRow key={index} guess={guess} targetWord={targetWord} />
      ))}
      {!gameOver && (
        <div className="input-row">
          <input
            type="text"
            value={currentGuess}
            onChange={handleGuessChange}
            maxLength="5"
          />
          <button onClick={handleGuessSubmit}>Submit Guess</button>
        </div>
      )}
      {gameOver && <NewGameButton onClick={handleNewGame} />}
    </div>
  );
};

export default Game;