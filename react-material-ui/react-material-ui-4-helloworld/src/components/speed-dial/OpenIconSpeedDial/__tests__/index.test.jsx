// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import OpenIconSpeedDial from 'src/components/speed-dial/OpenIconSpeedDial/index.jsx';

describe('<OpenIconSpeedDial> helloworld', () => {
  describe('<OpenIconSpeedDial /> mount helloworld', () => {
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
          <OpenIconSpeedDial>OpenIconSpeedDial</OpenIconSpeedDial>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OpenIconSpeedDial /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <OpenIconSpeedDial>OpenIconSpeedDial</OpenIconSpeedDial>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OpenIconSpeedDial /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<OpenIconSpeedDial>OpenIconSpeedDial</OpenIconSpeedDial>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
