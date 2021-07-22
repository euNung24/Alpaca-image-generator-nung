import React, { useState } from 'react';
import { alpacaConfig } from '../AlpacaConfig';
// import AlpacaArt from './AlpacaArt';
import Button from './Button';
import Control from './Control';

const Alpaca = () => {
  const [ config, setConfig ] = useState(alpacaConfig);
  const [ feature, setFeature] = useState(config[0]);

  // const [ accessories, setAccessories ] = useState(null);
  // const [ bg, setBg ] = useState(null);
  // const [ ears, setEars ] = useState(null);
  // const [ eyes, setEyes ] = useState(null);
  // const [ hair, setHair ] = useState(null);
  // const [ leg, setLeg ] = useState(null);
  // const [ mouth, setMouth ] = useState(null);
  // const [ neck, setNeck ] = useState(null);
  // const [ nose, setNose ] = useState(null);

  const setAttribute = (feature) => {
    const configClone = [...config];
    const getIndex = configClone.indexOf(feature);
    configClone.forEach(cfg => cfg.selected = false);
    configClone[getIndex].selected = true;
    setConfig(configClone);
    setFeature(configClone[getIndex]);
  }

  const changeImage = (feature, attribute) => {
    const configClone = [...config];
    const getIndex = configClone.indexOf(feature);
    const configItems = configClone[getIndex].items;
    const getAttrIndex =  configItems.indexOf(attribute);
    configItems.forEach(item => item.selected = false);
    configItems[getAttrIndex].selected = true;
    setConfig(configClone);
    console.log(config);
  }

  // const attr = {
  //   accessories, bg, ears, eyes, hair, leg, mouth, neck, nose
  // }

  return (
    <div>
      {/* <AlpacaArt attr={attr} /> */}
      {config.map(feature => 
        <Control key={feature.id} feature={feature} setAttribute={setAttribute} />
      )}
      <Button key={feature.id} feature={feature} changeImage={changeImage}/>
    </div>
  );
};

export default Alpaca;