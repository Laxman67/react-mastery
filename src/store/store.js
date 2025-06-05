import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log('TYPE: ', action.type);
  console.log('PAYLOAD: ', action.payload);
  console.log('CURRENT_STATE: ', store.getState());
  next(action);
  console.log('NEXT STATE: ', store.getState());
};
const middleware = [loggerMiddleware];
const composeEnhancer = compose(applyMiddleware(...middleware));
// Create store with middleware
export const store = createStore(rootReducer, undefined, composeEnhancer);
