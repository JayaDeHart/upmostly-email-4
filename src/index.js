import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deals from './Deals';
import Account from './Account';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="deals" element={<Deals />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
