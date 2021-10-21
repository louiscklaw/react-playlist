// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ResponsiveDrawer from 'src/components/drawers/ResponsiveDrawer/index.jsx';

describe('<ResponsiveDrawer> helloworld', () => {
  describe('<ResponsiveDrawer /> mount helloworld', () => {
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
          <ResponsiveDrawer>ResponsiveDrawer</ResponsiveDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ResponsiveDrawer /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ResponsiveDrawer>ResponsiveDrawer</ResponsiveDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ResponsiveDrawer /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ResponsiveDrawer>ResponsiveDrawer</ResponsiveDrawer>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
