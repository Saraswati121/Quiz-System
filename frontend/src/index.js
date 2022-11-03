import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuizHolder from './context/QuizHolder';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QuizHolder>
    <App />
    </QuizHolder>
    </BrowserRouter>
  </React.StrictMode>
);

