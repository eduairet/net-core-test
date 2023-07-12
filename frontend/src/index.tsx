import { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ModalProvider } from './Store/modal-context';
import App from './App';
import store from './Store';
import './index.css';

const root: Root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <ModalProvider>
        <Router>
          <App />
        </Router>
      </ModalProvider>
    </StoreProvider>
  </StrictMode >
);
