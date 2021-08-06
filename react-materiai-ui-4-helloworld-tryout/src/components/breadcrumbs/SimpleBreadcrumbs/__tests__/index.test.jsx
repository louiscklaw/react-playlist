// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SimpleBreadcrumbs from 'src/components/breadcrumbs/SimpleBreadcrumbs/index.jsx';

describe('<SimpleBreadcrumbs> helloworld', () => {
  describe('<SimpleBreadcrumbs /> mount helloworld', () => {
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
          <SimpleBreadcrumbs>SimpleBreadcrumbs</SimpleBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleBreadcrumbs /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SimpleBreadcrumbs>SimpleBreadcrumbs</SimpleBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleBreadcrumbs /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SimpleBreadcrumbs>SimpleBreadcrumbs</SimpleBreadcrumbs>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
