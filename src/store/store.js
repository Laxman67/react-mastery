import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './Middleware/logger';
import { thunk } from 'redux-thunk';

const middleWares = [
  process.env.NODE_ENV === 'development' && loggerMiddleware,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
export const persistedStore = persistStore(store);
