/**
 * Return a fake store, use to test container
 * @param  {Object} state
 * @return {Object}
 */
export default function getFakeStore(state) {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state }),
  };
}
