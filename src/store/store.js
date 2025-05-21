import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
const middleware = [logger];
const composeEnhancer = compose(applyMiddleware(...middleware));
// Create store with middleware
export const store = createStore(rootReducer, undefined, composeEnhancer);
