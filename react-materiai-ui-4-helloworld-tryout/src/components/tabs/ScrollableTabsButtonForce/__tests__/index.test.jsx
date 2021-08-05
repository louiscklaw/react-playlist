import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ScrollableTabsButtonForce from 'src/components/tabs/ScrollableTabsButtonForce/index.jsx';

describe('<ScrollableTabsButtonForce> helloworld', () => {
  describe('<ScrollableTabsButtonForce /> mount helloworld', () => {
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
          <ScrollableTabsButtonForce>ScrollableTabsButtonForce</ScrollableTabsButtonForce>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ScrollableTabsButtonForce /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ScrollableTabsButtonForce>ScrollableTabsButtonForce</ScrollableTabsButtonForce>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ScrollableTabsButtonForce /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ScrollableTabsButtonForce>ScrollableTabsButtonForce</ScrollableTabsButtonForce>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
