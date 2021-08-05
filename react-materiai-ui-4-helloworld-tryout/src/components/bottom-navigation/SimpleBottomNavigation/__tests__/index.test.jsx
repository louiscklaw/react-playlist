import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SimpleBottomNavigation from 'src/components/bottom-navigation/SimpleBottomNavigation/index.jsx';

describe('<SimpleBottomNavigation> helloworld', () => {
  describe('<SimpleBottomNavigation /> mount helloworld', () => {
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
          <SimpleBottomNavigation>SimpleBottomNavigation</SimpleBottomNavigation>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleBottomNavigation /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SimpleBottomNavigation>SimpleBottomNavigation</SimpleBottomNavigation>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleBottomNavigation /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SimpleBottomNavigation>SimpleBottomNavigation</SimpleBottomNavigation>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
