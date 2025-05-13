import { createContext, useEffect, useReducer } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase.utils';
//as the actual valueyou want to access

const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  // TODO
  console.log('Dispatched');
  console.log(state);
  console.log(action);

  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [{ currentUser }, dispatch] = useReducer(useReducer, INITIAL_STATE);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  // TODO
  // console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTIONS_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
