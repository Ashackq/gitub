import React from 'react';
import './team.css';
import linke from '../../ass/in.png';


  const Team = () => {
  const team = [
    { name: 'Gauri Ket', role: 'President', photo: 'gauriket.jpg' ,linkedin:"https://www.linkedin.com/in/gauri-ket-877296220/"},
    { name: 'Aman Singh', role: 'Vice President', photo: 'amansingh.jpg',linkedin:"https://www.linkedin.com/in/aman-singh-b13b3b219/" },
    { name: 'Sanket Yendhe', role: 'Design Head', photo: 'sanketyendhe.jpg',linkedin:"https://www.linkedin.com/in/sanket-yendhe-3640b7234/" },
    { name: 'Rishab Jain', role: 'Treasurer', photo: 'rishabjain.jpg',linkedin:"https://www.linkedin.com/in/rishabh-jain-b57b20200/" },
    { name: 'Akash Patel', role: 'Management Head', photo: 'akashpatel.jpg' ,linkedin:"https://www.linkedin.com/in/akash-patel-8a6107237/"},
  ];

  return (
    <div className="team-page">
      <h1>Meet our Team</h1>
      <div className="team-member president">
      <div className="img-container">
        <img src={require(`./photos/${team[0].photo}`)} alt={team[0].name} />
        <div className="linkedin-cover">
        <img id='linke' src={linke} alt='loo'/>
                  <a href={team[0].linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  </a>
                </div>
                </div>
        <h2>{team[0].name}</h2>
        <p>{team[0].role}</p>
      </div>
      <div className="team-members">
        {team.slice(1).map(member => (
          <div key={member.name} className="team-member">
            <div className="img-container">
            <img src={require(`./photos/${member.photo}`)} alt={member.name} />
            <div className="linkedin-cover">
              <img id='linke' src={linke} alt='loo'/>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
                </div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
