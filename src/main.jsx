import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

// Store and Provider
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      {/* <Wrapper> */}
      {/* <UserProvider> */}
      {/* <CategoriesProvider> */}
      {/* <CartProvider> */}
      <App />
      {/* </CartProvider> */}
      {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
      {/* </Wrapper> */}
    </Router>
  </Provider>
);
