import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import { UserProvider } from './context/userContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './__previewjs__/Wrapper.jsx';
import ProductsProvider from './context/productsContext.jsx';
import { CartProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Wrapper>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </Wrapper>
    </Router>
  </>
);
