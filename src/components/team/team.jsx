import React from 'react';
import './team.css';


const Team = () => {
  const team = [
    { name: 'Gauri Ket', role: 'President', photo: 'member4.jpg' },
    { name: 'Aman Singh', role: 'Vice President', photo: 'member1.jpg' },
    { name: 'Sanket', role: 'Design Head', photo: 'member2.jpg' },
    { name: 'Rishab Jain', role: 'Treasurer', photo: 'member3.jpg' },
    { name: 'Akash Patel', role: 'Management Head', photo: 'president.jpg' },
  ];

  return (
    <div className="team-page">
      <h1>Meet our Team</h1>
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
