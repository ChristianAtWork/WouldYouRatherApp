import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import RootReducer from './reducers';

const configureStore = preloadedState => {
  const logger = createLogger();
  const middlewares = [thunk, logger];

  const store = createStore(RootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, ...middlewares)));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(RootReducer);
    });
  }

  return store;
};

export default configureStore;
