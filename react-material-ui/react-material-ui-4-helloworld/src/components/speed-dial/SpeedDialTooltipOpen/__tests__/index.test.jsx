// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SpeedDialTooltipOpen from 'src/components/speed-dial/SpeedDialTooltipOpen/index.jsx';

describe('<SpeedDialTooltipOpen> helloworld', () => {
  describe('<SpeedDialTooltipOpen /> mount helloworld', () => {
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
          <SpeedDialTooltipOpen>SpeedDialTooltipOpen</SpeedDialTooltipOpen>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SpeedDialTooltipOpen /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SpeedDialTooltipOpen>SpeedDialTooltipOpen</SpeedDialTooltipOpen>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SpeedDialTooltipOpen /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SpeedDialTooltipOpen>SpeedDialTooltipOpen</SpeedDialTooltipOpen>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
