import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './Middleware/logger';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  import.meta.env.NODE_ENV === 'development' && loggerMiddleware,
].filter(Boolean);

const composeEnhancer = compose(applyMiddleware(...middleware));

// Create store with middleware
export const store = createStore(persistedReducer, undefined, composeEnhancer);
export const persistedStore = persistStore(store);
