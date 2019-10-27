// @flow

import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

type PropTypes = {
  data: Array<Object>,
};

/**
 * StocksGraphic
 */
const StocksGraphic = ({ data }: PropTypes) => {
  return (
    <LineChart width={1000} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="index" padding={{ left: 30, right: 30 }} />
      <YAxis
        label={{ value: 'Stocks values', angle: -90, position: 'insideLeft' }}
        type="number"
        domain={[0, 'dataMax']}
      />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="CAC40" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" />
    </LineChart>
  );
};

/**
 * @private
 * @param {Object} state
 * @returns {{}}
 */
const mapStateToProps = (state: Object) => ({
  ...state,
});

export default connect(mapStateToProps)(StocksGraphic);
