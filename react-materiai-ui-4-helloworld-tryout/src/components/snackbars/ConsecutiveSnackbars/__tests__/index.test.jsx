// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ConsecutiveSnackbars from 'src/components/snackbars/ConsecutiveSnackbars/index.jsx';

describe('<ConsecutiveSnackbars> helloworld', () => {
  describe('<ConsecutiveSnackbars /> mount helloworld', () => {
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
          <ConsecutiveSnackbars>ConsecutiveSnackbars</ConsecutiveSnackbars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ConsecutiveSnackbars /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ConsecutiveSnackbars>ConsecutiveSnackbars</ConsecutiveSnackbars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ConsecutiveSnackbars /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ConsecutiveSnackbars>ConsecutiveSnackbars</ConsecutiveSnackbars>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
