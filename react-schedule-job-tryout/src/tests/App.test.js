// import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from 'src/App';

import { shallow, mount, render } from 'enzyme';

test('renders learn react link', () => {
  render(<App />);
});

it('renders test_branch true', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App test_branch={true} />, div);
});

it('renders test_branch false', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App test_branch={false} />, div);
});

describe('AddToOrder component', () => {
  it('should be handling checkboxChecked', () => {
    const wrapper = shallow(<App test_branch={false} />);

    wrapper.find('button').simulate('click');
  });
});
