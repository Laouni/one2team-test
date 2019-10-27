import configureStore from './configureStore';

const mockApplyMiddleware = jest.fn();
const expectedStore = { subscribe: jest.fn() };
const mockCreateStore = jest.fn().mockReturnValue(expectedStore);

jest.mock('./reducers', () => jest.fn());

describe('configureStore function', () => {
  it('should create store', () => {
    // when
    const actualStore = configureStore();
    // then
    expect(actualStore).toEqual(expectedStore);
    expect(mockCreateStore).toBeCalled();
    expect(mockApplyMiddleware).toBeCalled();
  });
});
