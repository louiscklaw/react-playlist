// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PersistentDrawerLeft from 'src/components/drawers/PersistentDrawerLeft/index.jsx';

describe('<PersistentDrawerLeft> helloworld', () => {
  describe('<PersistentDrawerLeft /> mount helloworld', () => {
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
          <PersistentDrawerLeft>PersistentDrawerLeft</PersistentDrawerLeft>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PersistentDrawerLeft /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PersistentDrawerLeft>PersistentDrawerLeft</PersistentDrawerLeft>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PersistentDrawerLeft /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PersistentDrawerLeft>PersistentDrawerLeft</PersistentDrawerLeft>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
