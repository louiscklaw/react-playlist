// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TitlebarImageList from 'src/components/image-list/TitlebarImageList/index.jsx';

describe('<TitlebarImageList> helloworld', () => {
  describe('<TitlebarImageList /> mount helloworld', () => {
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
          <TitlebarImageList>TitlebarImageList</TitlebarImageList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TitlebarImageList /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TitlebarImageList>TitlebarImageList</TitlebarImageList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TitlebarImageList /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TitlebarImageList>TitlebarImageList</TitlebarImageList>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
