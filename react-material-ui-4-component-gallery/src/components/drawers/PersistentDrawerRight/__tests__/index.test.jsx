// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PersistentDrawerRight from 'src/components/drawers/PersistentDrawerRight/index.jsx';

describe('<PersistentDrawerRight> helloworld', () => {
  describe('<PersistentDrawerRight /> mount helloworld', () => {
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
          <PersistentDrawerRight>PersistentDrawerRight</PersistentDrawerRight>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PersistentDrawerRight /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PersistentDrawerRight>PersistentDrawerRight</PersistentDrawerRight>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PersistentDrawerRight /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PersistentDrawerRight>PersistentDrawerRight</PersistentDrawerRight>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
