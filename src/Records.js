import React from 'react';

function Records() {
  const users = [
    { name: 'Jeff', hobby: 'Basketball' },
    { name: 'Joe', hobby: 'Knitting' },
    { name: 'Deepti', hobby: 'Reality TV' },
    { name: 'Sarah', hobby: 'Weightlifting' },
  ];

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <User name={user.name} hobby={user.hobby} key={index} />
      ))}
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <p>Hobby: {user.hobby}</p>
        </div>
      ))}
    </div>
  );
}

export default Records;
