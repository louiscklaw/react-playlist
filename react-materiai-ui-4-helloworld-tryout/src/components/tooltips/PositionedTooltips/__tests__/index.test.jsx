import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PositionedTooltips from 'src/components/tooltips/PositionedTooltips/index.jsx';

describe('<PositionedTooltips> helloworld', () => {
  describe('<PositionedTooltips /> mount helloworld', () => {
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
          <PositionedTooltips>PositionedTooltips</PositionedTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PositionedTooltips /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PositionedTooltips>PositionedTooltips</PositionedTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PositionedTooltips /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PositionedTooltips>PositionedTooltips</PositionedTooltips>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
