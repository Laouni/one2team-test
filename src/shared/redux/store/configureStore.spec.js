import configureStore from './configureStore';

const mockApplyMiddleware = jest.fn();
const expectedStore = { subscribe: jest.fn() };
const mockCreateStore = jest.fn().mockReturnValue(expectedStore);
const mockCompose = jest.fn();

jest.mock('redux', () => ({
  createStore: () => mockCreateStore(),
  compose: () => mockCompose(),
  applyMiddleware: () => mockApplyMiddleware(),
}));
jest.mock('../reducers/reducers', () => jest.fn());

describe('configureStore function', () => {
  it('should create store', () => {
    // when
    const actualStore = configureStore();
    // then
    expect(actualStore).toEqual(expectedStore);
    expect(mockCompose).toBeCalled();
    expect(mockCreateStore).toBeCalled();
    expect(mockApplyMiddleware).toBeCalled();
  });
});
