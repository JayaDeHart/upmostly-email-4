import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      email: email,
      username: username,
      password: password,
    };

    const response = await axios.post(
      'https://someimaginaryurl/signup',
      formData,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    console.log(response);
    //expect an http code like 200 for success, or 500 for an error
  }

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
        <label for="email" />
        <input
          name="email"
          type="text"
          onChange={handleEmail}
          value={email}
        ></input>
        <button type="submit">Submit</button>
        <label for="username" />
        <input
          name="username"
          type="text"
          onChange={handleUsername}
          value={username}
        ></input>
        <label for="password" />
        <input
          name="password"
          type="text"
          onChange={handlePassword}
          value={password}
        ></input>
      </form>
    </div>
  );
}

export default App;
