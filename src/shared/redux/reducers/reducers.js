// @flow

/**
 * @module reducers/combined
 */

import { combineReducers } from 'redux';
import stocks from './stocksReducer';

/**
 * @memberof reducers/combined
 */
export default combineReducers({
  stocks,
});
