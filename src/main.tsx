import React from 'react';
import ReactDOM from 'react-dom/client';
import { Inicial } from './pages/App.tsx';
import './globals/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Inicial />
  </React.StrictMode>,
)
