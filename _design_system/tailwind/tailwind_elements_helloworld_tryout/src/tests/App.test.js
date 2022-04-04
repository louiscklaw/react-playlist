import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from 'src/App';

test('renders learn react link', () => {
  render(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App test_branch={true} />, div);
});

it('renders without crashing test_branch=false', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App test_branch={false} />, div);
});
