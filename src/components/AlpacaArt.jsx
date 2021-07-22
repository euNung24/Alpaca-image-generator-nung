import React from 'react';

const AlpacaArt = (attr) => {
  const { accessories, bg, ears, eyes, hair, leg, mouth, neck, nose } = attr
  return (
    <>
      <img src={accessories} alt="accessories" />
      <img src={bg} alt="background" />
      <img src={ears} alt="ears" />
      <img src={eyes} alt="eyes" />
      <img src={hair} alt="hair" />
      <img src={leg} alt="leg" />
      <img src={mouth} alt="mouth" />
      <img src={neck} alt="neck" />
      <img src={nose} alt="now" />
    </>
  );
};

export default AlpacaArt;