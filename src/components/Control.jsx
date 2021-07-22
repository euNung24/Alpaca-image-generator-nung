import React from 'react';

const Control = ({feature, setAttribute}) => {
  return (
    <button onClick={() => setAttribute(feature)} className="button">{feature.label}</button>
  );
};

export default Control;