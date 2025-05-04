import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './context/userContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './__previewjs__/Wrapper.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Wrapper>
        <UserProvider>
          <App />
        </UserProvider>
      </Wrapper>
    </Router>
  </>
);
