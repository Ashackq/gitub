import React from 'react';
import './card.css';

const possibleColors = [
    "#F7E2AD",

  ];

const getRandomColor = () => {
    return possibleColors[Math.floor(Math.random() * possibleColors.length)];
  };


  const Card = ({ activeProjects }) => {
    
    const randomColor = getRandomColor();
    return (
      <div className="App">
        <h1>Following is the list of <br />projects:</h1>
        <div className="projects-container">
             <div className="active-project-card" style={{ backgroundColor: randomColor }}>
                <h2>Active Projects</h2>
                    {activeProjects.map((name, index) => (
                <p key={index}> {name}</p>
                ))}
            </div>
        </div>
      </div>
    );
  };


export default Card;
