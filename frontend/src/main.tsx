import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root container element
const container = document.getElementById('root');

// Create a root instance using the new API
const root = createRoot(container!); // The "!" asserts the container exists (we know it does from index.html)

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);