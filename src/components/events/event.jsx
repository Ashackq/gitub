import React, { useState, useEffect } from 'react';
import "./time.css";

import { Link } from 'react-router-dom';

const UpcomingEventsContainer = ({events}) => {

 

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

  const [eventsWithTimeRemaining, setEventsWithTimeRemaining] = useState(events.map(event => ({
    ...event,
    timeRemaining: calculateTimeRemaining(event.date),
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setEventsWithTimeRemaining(events.map(event => ({
        ...event,
        timeRemaining: calculateTimeRemaining(event.date),
      })));
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    
    <div className="upcoming-events-container">
     
      <h2>Upcoming Events</h2>
    
        
      <div className="scroll-container">
        
        {eventsWithTimeRemaining.map(event => (
        <Link to={`./event${event.id}`}>
      
          <div className="event"  key={event.name} >
            <h3>{event.name}</h3>
            
            <table className="countdown-table">
              
              <tr>
                  <td>Days</td>
                  <td>Hours</td>
                  <td>Minutes</td>
                  <td>Seconds</td>
                </tr>

              <tbody>
              
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