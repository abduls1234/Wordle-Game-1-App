import React, { useState } from 'react';
import Game from './components/Game';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="app">
      <h1>Wordle Game</h1>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Game />
    </div>
  );
};

export default App;