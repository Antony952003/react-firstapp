import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App  from './App';
import Logo from './logo';
import Image from './image';
import Price from './price';
import Button from './button';
import Quantity from './Quantity';
import Description from './description';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo/>
    <Image/>
    <Price/>
    <Description/>
    <Quantity/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
