// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PositionedSnackbar from 'src/components/snackbars/PositionedSnackbar/index.jsx';

describe('<PositionedSnackbar> helloworld', () => {
  describe('<PositionedSnackbar /> mount helloworld', () => {
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
          <PositionedSnackbar>PositionedSnackbar</PositionedSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PositionedSnackbar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PositionedSnackbar>PositionedSnackbar</PositionedSnackbar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PositionedSnackbar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PositionedSnackbar>PositionedSnackbar</PositionedSnackbar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
