import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import StandaloneToggleButton from 'src/components/toggle-button/StandaloneToggleButton/index.jsx';

describe('<StandaloneToggleButton> helloworld', () => {
  describe('<StandaloneToggleButton /> mount helloworld', () => {
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
          <StandaloneToggleButton>StandaloneToggleButton</StandaloneToggleButton>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<StandaloneToggleButton /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <StandaloneToggleButton>StandaloneToggleButton</StandaloneToggleButton>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<StandaloneToggleButton /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<StandaloneToggleButton>StandaloneToggleButton</StandaloneToggleButton>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
