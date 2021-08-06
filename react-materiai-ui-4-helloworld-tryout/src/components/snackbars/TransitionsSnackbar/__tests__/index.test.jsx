// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TransitionsSnackbar from 'src/components/snackbars/TransitionsSnackbar/index.jsx';

describe('<TransitionsSnackbar> helloworld', () => {
  describe('<TransitionsSnackbar /> mount helloworld', () => {
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
          <TransitionsSnackbar>TransitionsSnackbar</TransitionsSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TransitionsSnackbar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TransitionsSnackbar>TransitionsSnackbar</TransitionsSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TransitionsSnackbar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TransitionsSnackbar>TransitionsSnackbar</TransitionsSnackbar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
