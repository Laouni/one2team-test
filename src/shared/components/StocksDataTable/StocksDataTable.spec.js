import React from 'react';
import renderer from 'react-test-renderer';
import StocksDataTable from './StocksDataTable';

const defaultProps = {
  data: [
    {
      index: 1,
      NASDAQ: 5.67,
      CAC40: 12.45,
    },
    {
      index: 2,
      NASDAQ: 15.57,
      CAC40: 10.43,
    },
    {
      index: 3,
      NASDAQ: 18.61,
      CAC40: 22.25,
    },
    {
      index: 4,
      NASDAQ: 9.87,
      CAC40: 11.48,
    },
    {
      index: 5,
      NASDAQ: 35.67,
      CAC40: 22.95,
    },
  ],
};

describe('StocksDataTable compoent', () => {
  it('should render correctly without props', () => {
    const component = renderer.create(<StocksDataTable />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = renderer.create(<StocksDataTable data={defaultProps.data} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
