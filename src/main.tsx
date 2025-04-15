import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/index.css';
import App from './app';
import { initSentry } from './shared/config/sentry';

// Initialize Sentry
initSentry();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
