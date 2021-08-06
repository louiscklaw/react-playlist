import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CollapsedBreadcrumbs from 'src/components/breadcrumbs/CollapsedBreadcrumbs/index.jsx';

describe('<CollapsedBreadcrumbs> helloworld', () => {
  describe('<CollapsedBreadcrumbs /> mount helloworld', () => {
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
          <CollapsedBreadcrumbs>CollapsedBreadcrumbs</CollapsedBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CollapsedBreadcrumbs /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CollapsedBreadcrumbs>CollapsedBreadcrumbs</CollapsedBreadcrumbs>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CollapsedBreadcrumbs /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CollapsedBreadcrumbs>CollapsedBreadcrumbs</CollapsedBreadcrumbs>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
