import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DirectionSnackbar from 'src/components/snackbars/DirectionSnackbar/index.jsx';

describe('<DirectionSnackbar> helloworld', () => {
  describe('<DirectionSnackbar /> mount helloworld', () => {
    let mount;

    beforeEach(() => {
      mount = createMount();
    });

    afterEach(() => {
      mount.cleanUp();
    });

    test('should work', () => {
      const wrapper = mount(
        <MockedTheme>
          <DirectionSnackbar>DirectionSnackbar</DirectionSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DirectionSnackbar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DirectionSnackbar>DirectionSnackbar</DirectionSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DirectionSnackbar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DirectionSnackbar>DirectionSnackbar</DirectionSnackbar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
