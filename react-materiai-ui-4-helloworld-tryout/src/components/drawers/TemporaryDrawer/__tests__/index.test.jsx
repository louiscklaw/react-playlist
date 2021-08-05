import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TemporaryDrawer from 'src/components/drawers/TemporaryDrawer/index.jsx';

describe('<TemporaryDrawer> helloworld', () => {
  describe('<TemporaryDrawer /> mount helloworld', () => {
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
          <TemporaryDrawer>TemporaryDrawer</TemporaryDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TemporaryDrawer /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TemporaryDrawer>TemporaryDrawer</TemporaryDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TemporaryDrawer /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TemporaryDrawer>TemporaryDrawer</TemporaryDrawer>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
