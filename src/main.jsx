import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Niche wali line se humne Router ko import kiya hai
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter ne hamari puri App ko cover kar liya hai taaki hum pages badal sakein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);