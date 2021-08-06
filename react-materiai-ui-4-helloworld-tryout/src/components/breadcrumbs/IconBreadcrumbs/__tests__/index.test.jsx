import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import IconBreadcrumbs from 'src/components/breadcrumbs/IconBreadcrumbs/index.jsx';

describe('<IconBreadcrumbs> helloworld', () => {
  describe('<IconBreadcrumbs /> mount helloworld', () => {
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
          <IconBreadcrumbs>IconBreadcrumbs</IconBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IconBreadcrumbs /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <IconBreadcrumbs>IconBreadcrumbs</IconBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IconBreadcrumbs /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<IconBreadcrumbs>IconBreadcrumbs</IconBreadcrumbs>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
