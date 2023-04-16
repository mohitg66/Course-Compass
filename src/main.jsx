import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Carousel, initTE, Ripple } from "tw-elements";
import { Select, initTE } from "tw-elements";
initTE({ Select });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
