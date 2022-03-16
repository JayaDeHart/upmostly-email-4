import './App.css';
import { useState } from 'react';

function App() {
  const [formState, setFormState] = useState({
    email: '',
    username: '',
    password: '',
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit}>
        <label for="email" />
        <input
          name="email"
          type="text"
          onChange={handleChange}
          value={email}
        ></input>
        <button type="submit">Submit</button>
        <label for="username" />
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        ></input>
        <label for="password" />
        <input
          name="password"
          type="text"
          onChange={handleChange}
          value={password}
        ></input>
      </form>
    </div>
  );
}

export default App;
