import React from 'react';

const AlpacaArt = ({attr}) => {
  const { accessories, bg, ears, eyes, hair, leg, mouth, neck, nose } = attr;
  return (
    <>
      <img src={bg} alt="background" className="bg"/>
      <img src={accessories} alt="accessories" className="accessories"/>
      <img src={ears} alt="ears" className="ears"/>
      <img src={eyes} alt="eyes" className="eyes"/>
      <img src={hair} alt="hair" className="hair"/>
      <img src={leg} alt="leg" className="leg"/>
      <img src={mouth} alt="mouth" className="mouth"/>
      <img src={neck} alt="neck" className="neck"/>
      <img src={nose} alt="nose" className="nose"/>
    </>
  );
};

export default AlpacaArt;