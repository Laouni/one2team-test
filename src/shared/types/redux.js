// @flow

import Axios from 'axios';

/**
 * For an Action, the type is required and the payload optional
 * @type {Object}
 * @memberof types/redux
 */
export type Action = {
  type: string,
  payload?: any,
};
