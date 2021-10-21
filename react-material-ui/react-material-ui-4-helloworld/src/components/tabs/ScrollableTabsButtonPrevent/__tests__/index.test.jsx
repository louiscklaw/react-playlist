// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ScrollableTabsButtonPrevent from 'src/components/tabs/ScrollableTabsButtonPrevent/index.jsx';

describe('<ScrollableTabsButtonPrevent> helloworld', () => {
  describe('<ScrollableTabsButtonPrevent /> mount helloworld', () => {
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
          <ScrollableTabsButtonPrevent>ScrollableTabsButtonPrevent</ScrollableTabsButtonPrevent>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ScrollableTabsButtonPrevent /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ScrollableTabsButtonPrevent>ScrollableTabsButtonPrevent</ScrollableTabsButtonPrevent>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ScrollableTabsButtonPrevent /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ScrollableTabsButtonPrevent>ScrollableTabsButtonPrevent</ScrollableTabsButtonPrevent>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
