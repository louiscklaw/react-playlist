import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import InteractiveTooltips from 'src/components/tooltips/InteractiveTooltips/index.jsx';

describe('<InteractiveTooltips> helloworld', () => {
  describe('<InteractiveTooltips /> mount helloworld', () => {
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
          <InteractiveTooltips>InteractiveTooltips</InteractiveTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<InteractiveTooltips /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <InteractiveTooltips>InteractiveTooltips</InteractiveTooltips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<InteractiveTooltips /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<InteractiveTooltips>InteractiveTooltips</InteractiveTooltips>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
