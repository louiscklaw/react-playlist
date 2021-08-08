import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import ComponentHelloworld from './index';

describe('<ComponentHelloworld />', () => {
  let mount;

  function MySuccessButton({ children }) {
    return (
      <ThemeProvider theme={{ success: { main: '#fff' } }}>
        {children}
      </ThemeProvider>
    );
  }

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(
      <MockedTheme>
        <ComponentHelloworld />
      </MockedTheme>
    );
  });
});
