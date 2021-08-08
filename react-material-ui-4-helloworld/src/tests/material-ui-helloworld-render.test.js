import { createRender } from '@material-ui/core/test-utils';
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
  let render;

  beforeEach(() => {
    render = createRender();
  });

  afterEach(() => {});

  it('should work', () => {
    const wrapper = render(
      <MockedTheme>
        <MySuccessButton>MySuccessButton</MySuccessButton>
      </MockedTheme>
    );

    expect(wrapper.html).toMatchSnapshot();
  });
});
