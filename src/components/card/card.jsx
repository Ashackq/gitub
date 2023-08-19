import React from 'react';
import './card.css';

const possibleColors = [
    "#F7E2AD",

  ];

// const ActiveProjectsCard = ({ name, description, startDate, endDate }) => {
//     const randomColor = getRandomColor();
//   return (
    
//     <div className="active-project-card" style={{ backgroundColor: randomColor }}>
//       <h2>{name}</h2>
//       <p>{description}</p>
//       <p>Start Date: {startDate}</p>
//       <p>End Date: {endDate}</p>
//     </div>
//   );
// };

const ActiveProjectsCard = ({ names }) => {
    const randomColor = getRandomColor();
  
    return (
      <div className="active-project-card" style={{ backgroundColor: randomColor }}>
        <h2>Active Projects</h2>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    );
  };


const getRandomColor = () => {
    return possibleColors[Math.floor(Math.random() * possibleColors.length)];
  };


  const Card = ({ activeProjects }) => {
    const namesArray = activeProjects.flatMap(project => project.names);
  
    return (
      <div className="App">
        <h1>Following is the list of <br />projects:</h1>
        <div className="projects-container">
            <div className="active-project-card" style={{ backgroundColor: randomColor }}>
                <h2>Active Projects</h2>
                    {names.map((name, index) => (
                <p key={index}>{name}</p>
                ))}
            </div>
        </div>
      </div>
    );
  };

// const Card = ({ activeProjects }) => {
//   return (
//     <div className="App">
//       <h1>Following is the list of <br></br>projects:</h1>
//       <br/><br/>
//       <div className="projects-container">

//         {activeProjects.map((project, index) => (
//           <ActiveProjectsCard
//             key={index}
//             name={project.name}
//             description={project.description}
//             startDate={project.startDate}
//             endDate={project.endDate}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Card;
