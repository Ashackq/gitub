import React from 'react';
import './detail.css';

const Details = ({ heading, description, hrwidth, hrenable, spcolor, color, wordColors }) => {
  const getDescriptionWithColoredWords = () => {
    let modifiedDescription = description;

    wordColors.forEach(({ word, color }) => {
      const startIndex = modifiedDescription.indexOf(word);
      if (startIndex !== -1) {
        const endIndex = startIndex + word.length;
        const coloredWord = `<span style="color: ${color}">${word}</span>`;
        modifiedDescription =
          modifiedDescription.substring(0, startIndex) +
          coloredWord +
          modifiedDescription.substring(endIndex);
      }
    });

    return { __html: modifiedDescription };
  };

  return (
    <div className="details-container">
      <h2 className="center" style={{ color: spcolor }}>{heading}</h2>
      <hr style={{ display: hrenable, border: hrwidth, borderColor: spcolor }} />
      <p className="center" style={{ color: color }} dangerouslySetInnerHTML={getDescriptionWithColoredWords()} />
    </div>
  );
};

export default Details;
