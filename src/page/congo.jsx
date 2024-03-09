import React, { useEffect, useState } from 'react';
import { auth, storage } from "../firebaseConfig.js";
import "./congo.css";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [userTeamName, setUserTeamName] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const [teamName,] = email.split('@');
        setUserTeamName(teamName);
        console.log(teamName);
        const certificatesRef = storage.ref(`certificates/${teamName}`); 

        certificatesRef.listAll().then((result) => {
          const urls = [];
          
          const downloadURLPromises = result.items.map((item) => item.getDownloadURL());
          
          Promise.all(downloadURLPromises)
            .then((downloadURLs) => {
              urls.push(...downloadURLs);
              setCertificates(urls);
            })
            .catch((error) => {
              console.error("Error fetching download URLs:", error);
            });
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="congratulations">
        <h2>Congratulations {userTeamName ? userTeamName.toUpperCase() : ''} Team!</h2>
        <p>You have successfully reached your destination.</p>
        <p>Enjoy your achievement!</p>
      </div>
      <div className='certificates'>
        <h1>Certificates</h1>
        <ul>
          {certificates.map((certificate, index) => (
            <li key={index}>
              <a href={certificate} target="_blank" rel="noopener noreferrer">
                Certificate {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificates;
