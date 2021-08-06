// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import AnchorPlayground from 'src/components/popover/AnchorPlayground/index.jsx';

describe('<AnchorPlayground> helloworld', () => {
  describe('<AnchorPlayground /> mount helloworld', () => {
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
          <AnchorPlayground>AnchorPlayground</AnchorPlayground>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AnchorPlayground /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <AnchorPlayground>AnchorPlayground</AnchorPlayground>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AnchorPlayground /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<AnchorPlayground>AnchorPlayground</AnchorPlayground>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
