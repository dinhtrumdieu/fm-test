import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware =>
  // if (process.env.NODE_ENV !== 'production') {
  //     const { composeWithDevTools } = require('redux-devtools-extension');
  //     return composeWithDevTools(applyMiddleware(...middleware));
  // }
  applyMiddleware(...middleware);
// Redux: Store
const store = createStore(rootReducer, bindMiddleware([thunk, sagaMiddleware]));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
