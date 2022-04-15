import React from 'react';

function Consumer() {
  const { color, setColor } = useContext(ColorContext);
  const lightStyle = {
    color: 'Black',
    backgroundColor: 'White',
  };
  const darkStyle = {
    color: 'White',
    backgroundColor: 'Black',
  };
  return (
    <div style={color ? lightStyle : darkStyle}>
      <h1>Hello!</h1>
      <button
        onClick={() => {
          setColor(!color);
        }}
      >
        Change Mode
      </button>
    </div>
  );
}

export default Consumer;
