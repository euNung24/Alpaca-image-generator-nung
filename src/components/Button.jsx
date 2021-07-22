import React from 'react';

const Button = ({feature, changeImage}) => {
  return (
    <>
      {feature.items.map(attr => 
        <button key={attr.id} onClick={() => changeImage(feature, attr)}>
          {attr.label}
        </button>
      )}
    </>
  );
};

export default Button;