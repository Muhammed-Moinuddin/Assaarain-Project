import React from 'react';

const CustomLine = ({ width = '10%', height = '3px', color = '#00AEEF'}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        margin: 'auto',
      }}
    ></div>
  );
};

export default CustomLine;
