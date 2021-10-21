import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import LabelBottomNavigation from 'src/components/bottom-navigation/LabelBottomNavigation/index.jsx';

describe('<LabelBottomNavigation> helloworld', () => {
  describe('<LabelBottomNavigation /> mount helloworld', () => {
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
          <LabelBottomNavigation>LabelBottomNavigation</LabelBottomNavigation>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LabelBottomNavigation /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <LabelBottomNavigation>LabelBottomNavigation</LabelBottomNavigation>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LabelBottomNavigation /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<LabelBottomNavigation>LabelBottomNavigation</LabelBottomNavigation>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
