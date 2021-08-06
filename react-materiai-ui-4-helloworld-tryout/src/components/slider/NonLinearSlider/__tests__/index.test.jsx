// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import NonLinearSlider from 'src/components/slider/NonLinearSlider/index.jsx';

describe('<NonLinearSlider> helloworld', () => {
  describe('<NonLinearSlider /> mount helloworld', () => {
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
          <NonLinearSlider>NonLinearSlider</NonLinearSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<NonLinearSlider /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <NonLinearSlider>NonLinearSlider</NonLinearSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<NonLinearSlider /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<NonLinearSlider>NonLinearSlider</NonLinearSlider>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
