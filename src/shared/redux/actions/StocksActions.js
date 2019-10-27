// @flow

import type { Action } from '../../types/redux';
import { STOCKS_VALUES_CHANGED } from '../../constants/StocksActionTypes';

/**
 * Update stocks
 * @param {Array<Object>} stocks
 * @returns {Action}
 */
export const setStocks = (stocks: Array<Object>): Action => {
  return { type: STOCKS_VALUES_CHANGED, payload: stocks };
};
