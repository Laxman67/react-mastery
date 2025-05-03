import React from 'react';
import Home from './page/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import Shop from './page/Shop';
import Navigation from './components/navigation/Navigation';
import SignIn from './page/SignIn';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
