// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ToggleButtonSizes from 'src/components/toggle-button/ToggleButtonSizes/index.jsx';

describe('<ToggleButtonSizes> helloworld', () => {
  describe('<ToggleButtonSizes /> mount helloworld', () => {
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
          <ToggleButtonSizes>ToggleButtonSizes</ToggleButtonSizes>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonSizes /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ToggleButtonSizes>ToggleButtonSizes</ToggleButtonSizes>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonSizes /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ToggleButtonSizes>ToggleButtonSizes</ToggleButtonSizes>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
