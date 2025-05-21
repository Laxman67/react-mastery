import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import { UserProvider } from './context/userContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './__previewjs__/Wrapper.jsx';
import CategoriesProvider from './context/categoriesContext.jsx';
import { CartProvider } from './context/cartContext.jsx';
// Store and Provider
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Wrapper>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </Wrapper>
    </Router>
  </Provider>
);
