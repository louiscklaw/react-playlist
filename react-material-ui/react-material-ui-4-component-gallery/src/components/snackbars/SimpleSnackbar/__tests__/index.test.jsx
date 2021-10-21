// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SimpleSnackbar from 'src/components/snackbars/SimpleSnackbar/index.jsx';

describe('<SimpleSnackbar> helloworld', () => {
  describe('<SimpleSnackbar /> mount helloworld', () => {
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
          <SimpleSnackbar>SimpleSnackbar</SimpleSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleSnackbar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SimpleSnackbar>SimpleSnackbar</SimpleSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleSnackbar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SimpleSnackbar>SimpleSnackbar</SimpleSnackbar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
