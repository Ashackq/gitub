import React, { useState } from "react";
import "./footer.css";
import linke from "../../ass/in.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hoveredIndex, setHovedIndex] = useState(null);

  const links = ["About", "Events", "Teams", "Con", "Fut"];

  const devs = [
    {
      id: 1,
      name: "Tanmay Gadge",
      role: "Web Developer",
      photo: "tanmaygadge.jpg",
      linkedIn: "https://www.linkedin.com/in/tanmay-gadge-377b9625b/",
    },
    {
      id: 2,
      name: "Sample 1",
      role: "Role 1",
      photo: "sample1.jpg",
      linkedIn: "",
    },
    {
      id: 3,
      name: "sample 2",
      role: "Role 2",
      photo: "sample2.jpg",
      linkedIn: "",
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
                  src={require(`./photos/${member.photo}`)}
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

        <div className="footer-links">
          <p>
            <Link to="/About">About</Link>
          </p>
          <p>
            <Link to="/Event">Events</Link>
          </p>
          <p>
            <Link to="/Teams">Teams</Link>
          </p>
          <p>
            <Link to="/Con">Let's Connect</Link>
          </p>
          <p>
            <Link to="/Fut">Future Plans</Link>
          </p>
        </div>
        <div className="college-site"><Link to={"https://www.mitwpu.edu.in"} target="_blank">MIT - World Peace University</Link></div>
        <div className="socials" style={{ textAlign: "center" }}>
          <p className="heading">Follow us on: </p>
          <div className="insta">
            <img src={require("./logos/instagram.png")} />
            &nbsp;
            <span className="insta-link">
              <Link
                to={"https://www.instagram.com/mitwpunumerates/"}
                target="_blank"
              >
                InstaGram
              </Link>
            </span>
          </div>
          &nbsp;
          <div className="linkedIn">
            <img src={require("./logos/linkedin.png")} />
            <span className="linkedIn-link">
              <Link
                to={
                  "https://www.linkedin.com/company/numerates-club/mycompany/"
                }
                target="_blank"
              >
                &nbsp;LinkedIn
              </Link>
            </span>
          </div>
        </div>
        <div className="copyright" style={{ textAlign: "center" }}>
          <p>© 2024 All Right Reserved</p>
          <p>Website design and development by MIT-WPU.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
