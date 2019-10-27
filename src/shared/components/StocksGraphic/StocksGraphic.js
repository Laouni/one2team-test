// @flow

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import render from 'enzyme/src/render';

type PropTypes = {
  data: Array<Object>,
};

/**
 * StocksGraphic
 */
class StocksGraphic extends React.Component<PropTypes> {
  /**
   * constructor
   * @param {PropTypes} props
   */
  constructor(props: PropTypes) {
    super(props);
  }

  /**
   * render
   * @returns {HTMLElement}
   */
  render() {
    const { data } = this.props;

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
  }
}

export default StocksGraphic;
