import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
// Store and Provider
import { Provider } from 'react-redux';
import { store, persistedStore } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);
