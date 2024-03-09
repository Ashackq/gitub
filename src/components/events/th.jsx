import React, { useState, useRef } from 'react';
import './time.css';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const UpcomingEventsContainer = ({ events }) => {
  const [confetti, setConfetti] = useState([]);
  const confettiContainerRefs = useRef([]);

  const handleMouseMove = (event, index) => {
    const { clientX, clientY } = event;
    const { left, top } = confettiContainerRefs.current[index].getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setConfetti((prevConfetti) => ({
      ...prevConfetti,
      [index]: { x, y },
    }));
  };

  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events</h2>
      <div className="scroll-container">
        {events.map((event, index) => (
          <Link to={`./event${event.id}`} key={event.name}>
            <div
              className="event"
              ref={(el) => (confettiContainerRefs.current[index] = el)}
              onMouseMove={(event) => handleMouseMove(event, index)}
              key={event.name}
              style={{
                background: 'linear-gradient(45deg, #CA4246 16.666%, #E16541 16.666%, #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%)',
                backgroundSize: '100%',
                backgroundRepeat: 'repeat',
                transition: 'background-size 0.5s ease-in', // Add transition
              }}
              // Add hover styles
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = '650%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = '100%';
              }}
            >
              {confetti[index] && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  numberOfPieces={100}
                  recycle={false}
                  initialVelocityX={2}
                  initialVelocityY={5}
                  gravity={0.2}
                  style={{
                    position: 'absolute',
                    zIndex: -1,
                    height: '100%',
                    width: '100%',
                  }}
                />
              )}
              <h3>{event.name}</h3>
              <h1>Certificates Are Out</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsContainer;
