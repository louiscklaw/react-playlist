// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FallbackAvatars from 'src/components/avatars/FallbackAvatars/index.jsx';

describe('<FallbackAvatars> helloworld', () => {
  describe('<FallbackAvatars /> mount helloworld', () => {
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
          <FallbackAvatars>FallbackAvatars</FallbackAvatars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FallbackAvatars /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FallbackAvatars>FallbackAvatars</FallbackAvatars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FallbackAvatars /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FallbackAvatars>FallbackAvatars</FallbackAvatars>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
