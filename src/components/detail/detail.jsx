import React from 'react';
import './detail.css';

const Details = ({ count, hfsize, heading,fds, description, hrmarl, hrmarr, pos, hrenable, spcolor, color, wordColors, marginLeft, marginRight }) => {

  const getDescriptionWithColoredWords = () => {
    let modifiedDescription = description || '';

    wordColors.forEach(({ word, scolor }) => {
      const startIndex = modifiedDescription.indexOf(word);
      if (startIndex !== -1) {
        const endIndex = startIndex + word.length;
        const coloredWord = `<span style="color: ${scolor}">${word}</span>`;
        modifiedDescription =
          modifiedDescription.substring(0, startIndex) +
          coloredWord +
          modifiedDescription.substring(endIndex);
      }
    });

    modifiedDescription = modifiedDescription.replace(/\n/g, '<br />');

    return { __html: modifiedDescription };
  };

  const br = () => {
    const brTags = [];
    for (let i = 0; i < count; i++) {
      brTags.push(<br key={i} />);
    }
    return brTags;
  };


  return (
    <div className="details-container" style={{ marginLeft: marginLeft, marginRight: marginRight, textAlign: pos }}>

      <p className="center q" style={{ color: spcolor, fontSize: hfsize, display: hrenable }}>{heading}</p>
      <hr style={{ display: hrenable, marginLeft: hrmarl, marginRight: hrmarr, borderColor: spcolor }} />
      {br()}
      <br></br>
      <p className="center c" style={{ color: color, fontSize:fds }} dangerouslySetInnerHTML={getDescriptionWithColoredWords()} />
    </div>
  );
};

export default Details;
