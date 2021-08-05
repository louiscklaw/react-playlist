import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ControlledTooltips from 'src/components/tooltips/ControlledTooltips/index.jsx';

describe('<ControlledTooltips> helloworld', () => {
  describe('<ControlledTooltips /> mount helloworld', () => {
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
          <ControlledTooltips>ControlledTooltips</ControlledTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ControlledTooltips /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ControlledTooltips>ControlledTooltips</ControlledTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ControlledTooltips /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ControlledTooltips>ControlledTooltips</ControlledTooltips>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
