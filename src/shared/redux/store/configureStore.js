// @flow

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import rootReducer from '../reducers/reducers';

/**
 * setSessionStorage
 * Waiting the rehydrate from RehydrateRedux component to active the sessionStorage auto save
 * @param {Object} state Current State
 * @param {*} key
 */
const setSessionStorage = (state: Object, key: string) => {
  if (state[key] && state[key].isRehydrate === true)
    window.sessionStorage.setItem(`redux-${key}`, JSON.stringify(state[key]));
};

/**
 * Configures Redux store
 * @param {Object} initialState
 */
function configureStore(initialState: Object = {}) {
  const enhancers = compose(
    // Middleware store enhancer.
    applyMiddleware(thunk.withExtraArgument({ Axios })),
    // Redux Dev Tools store enhancer.
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    // We only want this enhancer enabled for development and when in a browser
    // with the extension installed.
    process.env.NODE_ENV === 'development' &&
      typeof window !== 'undefined' &&
      typeof window.devToolsExtension !== 'undefined'
      ? // Call the brower extension function to create the enhancer.
        window.devToolsExtension()
      : // Else we return a no-op function.
        f => f,
  );

  const store = initialState
    ? createStore(rootReducer, initialState, enhancers)
    : createStore(rootReducer, enhancers);

  if (typeof window !== 'undefined') {
    store.subscribe(() => {
      if (window.sessionStorage && store.getState()) {
        // Set sessionStorage backup
        setSessionStorage(store.getState(), 'stocksCac40Nasdaq');
      }
    });
  }

  return store;
}

export default configureStore;
