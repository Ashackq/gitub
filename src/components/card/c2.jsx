import React from 'react';
import './card.css';

const possibleColors = [
    "#F7E2AD",

  ];

const ActiveProjectsCard = ({ name, description, startDate, endDate }) => {
    const randomColor = getRandomColor();
  return (
    
    <div className="active-project-card" style={{ backgroundColor: randomColor }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </div>
  );
};

const Card = ({ activeProjects }) => {
  return (
    <div className="App">
      <h1>Following is the list of <br></br>projects:</h1>
      <br/><br/>
      <div className="projects-container">

        {activeProjects.map((project, index) => (
          <ActiveProjectsCard
            key={index}
            name={project.name}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;