import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const port = process.env.PORT || 9001;



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
