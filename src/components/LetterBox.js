import React, { useEffect, useState } from 'react';

const LetterBox = ({ letter, color }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [color]);

  return (
    <span className={`letter-box ${color} ${animate ? 'animate' : ''}`}>
      {letter}
    </span>
  );
};

export default LetterBox;