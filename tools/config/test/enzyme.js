import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const { shallow, mount } = Enzyme;

export { shallow };
export { mount };
