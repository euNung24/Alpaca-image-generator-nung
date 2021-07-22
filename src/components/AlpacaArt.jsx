import React from 'react';

const AlpacaArt = ({attr}) => {
  const { accessories, bg, ears, eyes, hair, leg, mouth, neck, nose } = attr;
  return (
    <>
      <img src={bg} alt="background" className="bg"/>
      <img src={accessories} alt="accessories" className="not_bg accessories"/>
      <img src={ears} alt="ears" className="not_bg ears"/>
      <img src={eyes} alt="eyes" className="not_bg eyes"/>
      <img src={hair} alt="hair" className="not_bg hair"/>
      <img src={leg} alt="leg" className="not_bg leg"/>
      <img src={mouth} alt="mouth" className="not_bg mouth"/>
      <img src={neck} alt="neck" className="not_bg neck"/>
      <img src={nose} alt="nose" className="not_bg nose"/>
    </>
  );
};

export default AlpacaArt;