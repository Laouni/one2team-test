import stocksReducer from './stocksReducer';

const initialState = {};

describe('stocks reducer', () => {
  it('should return default state on undefined state', () => {
    // given
    const action = {};
    // when
    const newState = stocksReducer(undefined, action);
    // then
    const expectedState = { stocks: [] };
    expect(newState).toEqual(expectedState);
  });

  it('should return same state on unhandled action', () => {
    // given
    const action = {};
    // when
    const newState = stocksReducer(initialState, action);
    // then
    expect(newState).toBe(initialState);
  });

  it('should return new state on set stocks list', () => {
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
    const action = {
      type: 'STOCKS_VALUES_CHANGED',
      payload: stocksList,
    };
    // when
    const newState = stocksReducer(initialState, action);
    // then
    const expectedState = { stocks: stocksList };
    expect(newState).not.toBe(initialState);
    expect(newState).toEqual(expectedState);
  });
});
