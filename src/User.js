import React from 'react';

function User({ name, hobby }) {
  const styles = {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center',
  };
  return (
    <div style={styles}>
      <h3>{name}</h3>
      <p>{hobby}</p>
    </div>
  );
}

export default User;
