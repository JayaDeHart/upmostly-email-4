import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>My Cool Store</h1>
      <nav
        style={{
          border: '1px solid black',
          padding: '1rem',
        }}
      >
        <Link to="/deals">Deals</Link> | <Link to="/account">Account</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
