import { shallow, mount, render } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.html).toMatchSnapshot();
});
