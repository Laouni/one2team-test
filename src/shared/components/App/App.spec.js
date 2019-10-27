import React from 'react';
import renderer from 'react-test-renderer';
import Axios from 'axios';
import { shallow } from '../../../../tools/config/test/enzyme';
import App from './App';

jest.mock('../StocksDataTable/StocksDataTable', () => 'mock-stocks-data-table');
jest.mock('../StocksGraphic/StocksGraphic', () => 'mock-stocks-graphic');

describe('App component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<App />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call API if stocks list is not defined', async () => {
    Axios.get = jest.fn().mockReturnValue(
      Promise.resolve({
        data: [
          {
            timestamp: 1572179500328,
            index: 3854,
            stocks: {
              NASDAQ: 2.671635251444507e-53,
              CAC40: 1.4047233574433293e-62,
            },
          },
          {
            timestamp: 1572179501328,
            index: 3855,
            stocks: {
              NASDAQ: 2.7260407904981827e-53,
              CAC40: 1.3051173150328128e-62,
            },
          },
          {
            timestamp: 1572179502333,
            index: 3856,
            stocks: {
              NASDAQ: 2.7330589021584643e-53,
              CAC40: 1.3993285768808365e-62,
            },
          },
          {
            timestamp: 1572179503334,
            index: 3857,
            stocks: {
              NASDAQ: 2.896808355539025e-53,
              CAC40: 2.207972762403556e-62,
            },
          },
          {
            timestamp: 1572179504334,
            index: 3858,
            stocks: {
              NASDAQ: 2.8993316629164897e-53,
              CAC40: 2.2105438319963443e-62,
            },
          },
        ],
      }),
    );

    const component = shallow(<App />);

    await component.instance().loadStocks();

    expect(component.instance().state.stocksList.length).toEqual(5);
  });
});
