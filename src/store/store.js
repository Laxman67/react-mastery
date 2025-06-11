import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './Middleware/logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

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

const middleWares = [
  process.env.NODE_ENV === 'development' && loggerMiddleware,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistedStore = persistStore(store);
