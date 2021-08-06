import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ActiveLastBreadcrumb from 'src/components/breadcrumbs/ActiveLastBreadcrumb/index.jsx';

describe('<ActiveLastBreadcrumb> helloworld', () => {
  describe('<ActiveLastBreadcrumb /> mount helloworld', () => {
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
          <ActiveLastBreadcrumb>ActiveLastBreadcrumb</ActiveLastBreadcrumb>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ActiveLastBreadcrumb /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ActiveLastBreadcrumb>ActiveLastBreadcrumb</ActiveLastBreadcrumb>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ActiveLastBreadcrumb /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ActiveLastBreadcrumb>ActiveLastBreadcrumb</ActiveLastBreadcrumb>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
