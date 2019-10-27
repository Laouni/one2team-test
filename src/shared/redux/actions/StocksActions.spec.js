import { setStocks } from './StocksActions';

describe('StocksActions function', () => {
  it('should return correct action for stocks list changed', () => {
    // given
    const stocksList = [
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
    ];
    // when
    const actual = setStocks(stocksList);
    // then
    const { type, payload } = actual;
    expect(payload).toEqual(stocksList);
    expect(type).toBe('STOCKS_VALUES_CHANGED');
  });
});
