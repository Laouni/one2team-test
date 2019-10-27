// @flow

import Axios from 'axios';

/**
 * stocks CAC40 and NASDAQ
 * @returns {Promise<AxiosResponse<T>>}
 */
export const stocksCac40NasdaqData = async () => {
  const { data } = await Axios.get('http://localhost:8000?count=10');
  return data;
};
