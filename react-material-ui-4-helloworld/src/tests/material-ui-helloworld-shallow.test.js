import { createShallow } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from './MockedTheme';

function MySuccessButton({ children }) {
  return (
    <ThemeProvider theme={{ success: { main: '#fff' } }}>
      {children}
    </ThemeProvider>
  );
}

describe('<MySuccessButton />', () => {
  let shallow;

  beforeEach(() => {
    // This is Mocha; in Jest, use beforeAll
    shallow = createShallow();
  });

  it('should work', () => {
    const wrapper = shallow(<MySuccessButton>MySuccessButton</MySuccessButton>);

    expect(wrapper.html).toMatchSnapshot();
  });
});
