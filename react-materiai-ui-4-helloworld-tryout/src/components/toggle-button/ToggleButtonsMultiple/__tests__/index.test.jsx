import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ToggleButtonsMultiple from 'src/components/toggle-button/ToggleButtonsMultiple/index.jsx';

describe('<ToggleButtonsMultiple> helloworld', () => {
  describe('<ToggleButtonsMultiple /> mount helloworld', () => {
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
          <ToggleButtonsMultiple>ToggleButtonsMultiple</ToggleButtonsMultiple>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonsMultiple /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ToggleButtonsMultiple>ToggleButtonsMultiple</ToggleButtonsMultiple>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtonsMultiple /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ToggleButtonsMultiple>ToggleButtonsMultiple</ToggleButtonsMultiple>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
