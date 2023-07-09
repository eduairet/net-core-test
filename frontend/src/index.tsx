import { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const root: Root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode >
);
