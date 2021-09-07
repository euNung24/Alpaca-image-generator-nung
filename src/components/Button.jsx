import React from 'react';

const Button = ({feature, changeImage}) => {
  return (
    <>
      <p className="tit-feature">{feature.label}</p>
      {feature.items.map(attr => 
        <button key={attr.id} onClick={() => changeImage(feature, attr)} className="button">
          {attr.label}
        </button>
      )}
    </>
  );
};

export default Button;