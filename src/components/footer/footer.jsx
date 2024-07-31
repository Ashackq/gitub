import React from "react";
import "./footer.css";
// import "../team/team.css";
import linke from "../../ass/in.png";

const Footer = () => {
  const devs = [
    {
      id: 1,
      name: "Tanmay Gadge",
      role: "Web Developer",
      photo: "tanmaygadge.jpg",
      linkedIn: "https://www.linkedin.com/in/tanmay-gadge-377b9625b/",
    },
    
  ];

  return (
    <>
      <footer className="footer">
        <h1 className="footer-heading">Our Developers: </h1>
        <div className="team-members">
          {devs.map((member) => (
            <div key={member.name} className="team-member">
              <div className="img-container">
                <img
                  src={require(`../team/photos/${member.photo}`)}
                  alt={member.name}
                />
                <div className="linkedin-cover">
                  <img id="linke" src={linke} alt="loo" />
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
