import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import RouterBreadcrumbs from 'src/components/breadcrumbs/RouterBreadcrumbs/index.jsx';

describe('<RouterBreadcrumbs> helloworld', () => {
  describe('<RouterBreadcrumbs /> mount helloworld', () => {
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
          <RouterBreadcrumbs>RouterBreadcrumbs</RouterBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RouterBreadcrumbs /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <RouterBreadcrumbs>RouterBreadcrumbs</RouterBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RouterBreadcrumbs /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<RouterBreadcrumbs>RouterBreadcrumbs</RouterBreadcrumbs>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
