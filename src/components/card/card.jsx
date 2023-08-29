import React from 'react';
import './card.css';

const possibleColors = [
  "#241833",
  "#1c282c",
  "#2d161f",
  "#312a2d",
  "#312722"
];

const getRandomColor = (index) => {
  const colorIndex = index % possibleColors.length;
  return possibleColors[colorIndex];
};

const Card = ({ cardData }) => {
  return (
    <div className="App">
      <h1>Following is the list of <br/>projects:</h1><br/><br/><br/><br/>
      <div className="projects-container">
        {cardData.map((activeProjects, index) => (
          <div key={index} className="group-container">
            {activeProjects.map((projectNames, cardIndex) => {
              const randomColor = getRandomColor(cardIndex);
              return (
                <div className="active-project-card" style={{ backgroundColor: randomColor }} key={cardIndex}>
                  <h2>Active Projects</h2>
                  {projectNames.map((name, projectIndex) => (
                    <p key={projectIndex}> {name}</p>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
