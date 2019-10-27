// @flow

import type { Action } from '../../types/redux';
import { STOCKS_VALUES_CHANGED } from '../../constants/StocksActionTypes';

type StateType = {
  stocks: Array<Object>,
};

const initialState: StateType = {
  stocks: [],
};

/**
 * Stocks reducer
 * @param {StateType} state
 * @param {Action} action
 * @returns reducer
 */
export default function stocksReducer(state: StateType = initialState, action: Action): StateType {
  switch (action.type) {
    case STOCKS_VALUES_CHANGED: {
      return {
        ...state,
        stocks: action.payload,
      };
    }
    default:
      return state;
  }
}
