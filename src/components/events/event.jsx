import React, { useState, useEffect, useRef } from 'react';
import './time.css';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const UpcomingEventsContainer = ({ events }) => {
  const calculateTimeRemaining = (targetDate) => {
    const now = new Date();
    const eventDate = new Date(targetDate);
    const timeDiff = eventDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [eventsWithTimeRemaining, setEventsWithTimeRemaining] = useState(
    events.map((event) => ({
      ...event,
      timeRemaining: calculateTimeRemaining(event.date),
    }))
  );

  const [confetti, setConfetti] = useState([]);
  const confettiContainerRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventsWithTimeRemaining(events.map((event) => ({
        ...event,
        timeRemaining: calculateTimeRemaining(event.date),
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

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
        {eventsWithTimeRemaining.map((event, index) => (
          <Link to={`./event${event.id}`} key={event.name}>
            <div
              className="event"
              ref={(el) => (confettiContainerRefs.current[index] = el)}
              onMouseMove={(event) => handleMouseMove(event, index)}
              key={event.name}
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
              <table className="countdown-table">
                <tbody>
                  <tr>
                    <td>Days</td>
                    <td>Hours</td>
                    <td>Minutes</td>
                    <td>Seconds</td>
                  </tr>
                  <tr>
                    <td>{event.timeRemaining.days}</td>
                    <td>{event.timeRemaining.hours}</td>
                    <td>{event.timeRemaining.minutes}</td>
                    <td>{event.timeRemaining.seconds}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsContainer;
