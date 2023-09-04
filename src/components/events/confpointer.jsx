import React, { useState ,useEffect} from 'react';
import Confetti from 'react-confetti';
import './c.css'; // Create this CSS file for styling

const ConfettiBar = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Turn off confetti after 5 seconds (adjust as needed)
  }, []);
  
  const startConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 3000); // Stop after 3 seconds
  };
  

  return (
    <div className="confetti-container">
      <button className="confetti-button" onClick={startConfetti}>
        Start Confetti
      </button>
      <div className="confetti">
        {isConfettiActive && <Confetti />}
      </div>
    </div>
  );
};

export default ConfettiBar;
