import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApiProvider } from './ApiContext';
// import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import './interceptors/axios.js';
// import { Carousel, initTE, Ripple } from "tw-elements";
import { Select, initTE } from "tw-elements";
initTE({ Select });

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApiProvider>
    <App />
  </ApiProvider>
);