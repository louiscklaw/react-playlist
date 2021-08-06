// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PermanentDrawerRight from 'src/components/drawers/PermanentDrawerRight/index.jsx';

describe('<PermanentDrawerRight> helloworld', () => {
  describe('<PermanentDrawerRight /> mount helloworld', () => {
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
          <PermanentDrawerRight>PermanentDrawerRight</PermanentDrawerRight>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PermanentDrawerRight /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PermanentDrawerRight>PermanentDrawerRight</PermanentDrawerRight>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PermanentDrawerRight /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PermanentDrawerRight>PermanentDrawerRight</PermanentDrawerRight>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
