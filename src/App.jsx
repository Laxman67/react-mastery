import React, { useEffect } from 'react';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './page/Shop';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/authentication/Authentication';
import CheckOut from './components/CheckOut/CheckOut';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase.utils';
import { setCurrentUser } from './store/User/UserAction';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
