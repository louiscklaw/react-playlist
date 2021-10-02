// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FabIntegrationSnackbar from 'src/components/snackbars/FabIntegrationSnackbar/index.jsx';

describe('<FabIntegrationSnackbar> helloworld', () => {
  describe('<FabIntegrationSnackbar /> mount helloworld', () => {
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
          <FabIntegrationSnackbar>FabIntegrationSnackbar</FabIntegrationSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FabIntegrationSnackbar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FabIntegrationSnackbar>FabIntegrationSnackbar</FabIntegrationSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FabIntegrationSnackbar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FabIntegrationSnackbar>FabIntegrationSnackbar</FabIntegrationSnackbar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
