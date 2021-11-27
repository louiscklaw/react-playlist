// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ToggleButtonNotEmpty from 'src/components/toggle-button/ToggleButtonNotEmpty/index.jsx';

describe('<ToggleButtonNotEmpty> helloworld', () => {
  describe('<ToggleButtonNotEmpty /> mount helloworld', () => {
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
          <ToggleButtonNotEmpty>ToggleButtonNotEmpty</ToggleButtonNotEmpty>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonNotEmpty /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ToggleButtonNotEmpty>ToggleButtonNotEmpty</ToggleButtonNotEmpty>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonNotEmpty /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ToggleButtonNotEmpty>ToggleButtonNotEmpty</ToggleButtonNotEmpty>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
