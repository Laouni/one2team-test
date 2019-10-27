// @flow

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';
import DevTools from '../../../containers/DevTools';

/**
 * Configures Redux store
 * @param {Object} initialState
 */
function configureStore(initialState: Object = {}) {
  const enhancers = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
  );

  return initialState
    ? createStore(rootReducer, initialState, enhancers)
    : createStore(rootReducer, enhancers);
}

export default configureStore;
