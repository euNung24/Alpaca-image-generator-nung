import React, { useEffect, useState } from 'react';
import { alpacaConfig } from '../AlpacaConfig';
import getImage from '../utils/getImage';
import AlpacaArt from './AlpacaArt';
import Button from './Button';
import Control from './Control';
import Header from './Header';

const Alpaca = () => {
  const [ config, setConfig ] = useState(alpacaConfig);
  const [ feature, setFeature] = useState(config[0]);

  const [ accessories, setAccessories ] = useState(null);
  const [ bg, setBg ] = useState(null);
  const [ ears, setEars ] = useState(null);
  const [ eyes, setEyes ] = useState(null);
  const [ hair, setHair ] = useState(null);
  const [ leg, setLeg ] = useState(null);
  const [ mouth, setMouth ] = useState(null);
  const [ neck, setNeck ] = useState(null);
  const [ nose, setNose ] = useState(null);

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

    const { dir } = feature;
    const { fileName } = attribute;
    console.log(feature.dir, attribute.fileName);

    getImage(dir, fileName, image => {
      switch(dir) {
        case 'backgrounds':
          setBg(image)
          break
        case 'accessories':
          setAccessories(image)
          break
        case 'ears':
          setEars(image)
          break
        case 'eyes':
          setEyes(image)
          break
        case 'hair':
          setHair(image)
          break
        case 'leg':
          setLeg(image)
          break
        case 'mouth':
          setMouth(image)
          break
        case 'neck':
          setNeck(image)
          break
        case 'nose':
          setNose(image)
          break
        default:
          break   
      }
    })
  }

  useEffect(() => {
    const renderAlpaca = () => {
      config.forEach(feature => {
        const attribute = feature.items.filter(item => 
          item.fileName === 'default'
        )[0]
        changeImage(feature, attribute);
      })
    }
    renderAlpaca()
  }, [])


  const attr = {
    accessories, bg, ears, eyes, hair, leg, mouth, neck, nose
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          <AlpacaArt attr={attr} />
        </div>
        <div className="right">
          <p>Accessorize your Alpaca</p>
          {config.map(feature => 
            <Control key={feature.id} feature={feature} setAttribute={setAttribute} />
          )}
          <br/>
          <Button key={feature.id} feature={feature} changeImage={changeImage}/>
        </div>
      </div>
    </div>
  );
};

export default Alpaca;