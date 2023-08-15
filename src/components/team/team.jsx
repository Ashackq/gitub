import React from 'react';
import './team.css';


const Team = () => {
  const team = [
    { name: 'President Name', role: 'President', photo: 'president.jpg' },
    { name: 'Member 1', role: 'Member', photo: 'member1.jpg' },
    { name: 'Member 2', role: 'Member', photo: 'member2.jpg' },
    { name: 'Member 3', role: 'Member', photo: 'member3.jpg' },
    { name: 'Member 4', role: 'Member', photo: 'member4.jpg' },
  ];

  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <div className="team-member president">
        <img src={require(`./photos/${team[0].photo}`)} alt={team[0].name} />
        <h2>{team[0].name}</h2>
        <p>{team[0].role}</p>
      </div>
      <div className="team-members">
        {team.slice(1).map(member => (
          <div key={member.name} className="team-member">
            <img src={require(`./photos/${member.photo}`)} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
