import { createMount } from '@material-ui/core/test-utils';
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
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(
      <MockedTheme>
        <MySuccessButton>MySuccessButton</MySuccessButton>
      </MockedTheme>
    );

    expect(wrapper.html).toMatchSnapshot();
  });
});
