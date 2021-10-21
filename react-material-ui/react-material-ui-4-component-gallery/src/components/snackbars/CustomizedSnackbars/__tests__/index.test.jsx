// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedSnackbars from 'src/components/snackbars/CustomizedSnackbars/index.jsx';

describe('<CustomizedSnackbars> helloworld', () => {
  describe('<CustomizedSnackbars /> mount helloworld', () => {
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
          <CustomizedSnackbars>CustomizedSnackbars</CustomizedSnackbars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedSnackbars /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedSnackbars>CustomizedSnackbars</CustomizedSnackbars>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedSnackbars /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedSnackbars>CustomizedSnackbars</CustomizedSnackbars>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
