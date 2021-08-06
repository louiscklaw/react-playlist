// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedBreadcrumbs from 'src/components/breadcrumbs/CustomizedBreadcrumbs/index.jsx';

describe('<CustomizedBreadcrumbs> helloworld', () => {
  describe('<CustomizedBreadcrumbs /> mount helloworld', () => {
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
          <CustomizedBreadcrumbs>CustomizedBreadcrumbs</CustomizedBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedBreadcrumbs /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedBreadcrumbs>CustomizedBreadcrumbs</CustomizedBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedBreadcrumbs /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedBreadcrumbs>CustomizedBreadcrumbs</CustomizedBreadcrumbs>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
