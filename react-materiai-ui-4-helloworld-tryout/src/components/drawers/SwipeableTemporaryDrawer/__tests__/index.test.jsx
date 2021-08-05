import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SwipeableTemporaryDrawer from 'src/components/drawers/SwipeableTemporaryDrawer/index.jsx';

describe('<SwipeableTemporaryDrawer> helloworld', () => {
  describe('<SwipeableTemporaryDrawer /> mount helloworld', () => {
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
          <SwipeableTemporaryDrawer>SwipeableTemporaryDrawer</SwipeableTemporaryDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwipeableTemporaryDrawer /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SwipeableTemporaryDrawer>SwipeableTemporaryDrawer</SwipeableTemporaryDrawer>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwipeableTemporaryDrawer /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SwipeableTemporaryDrawer>SwipeableTemporaryDrawer</SwipeableTemporaryDrawer>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
