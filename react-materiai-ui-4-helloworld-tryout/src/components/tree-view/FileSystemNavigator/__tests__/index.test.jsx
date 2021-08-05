import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FileSystemNavigator from 'src/components/tree-view/FileSystemNavigator/index.jsx';

describe('<FileSystemNavigator> helloworld', () => {
  describe('<FileSystemNavigator /> mount helloworld', () => {
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
          <FileSystemNavigator>FileSystemNavigator</FileSystemNavigator>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FileSystemNavigator /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FileSystemNavigator>FileSystemNavigator</FileSystemNavigator>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FileSystemNavigator /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FileSystemNavigator>FileSystemNavigator</FileSystemNavigator>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
