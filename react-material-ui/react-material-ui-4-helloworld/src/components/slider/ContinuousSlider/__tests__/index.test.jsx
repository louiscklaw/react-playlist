// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ContinuousSlider from 'src/components/slider/ContinuousSlider/index.jsx';

describe('<ContinuousSlider> helloworld', () => {
  describe('<ContinuousSlider /> mount helloworld', () => {
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
          <ContinuousSlider>ContinuousSlider</ContinuousSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ContinuousSlider /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ContinuousSlider>ContinuousSlider</ContinuousSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ContinuousSlider /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ContinuousSlider>ContinuousSlider</ContinuousSlider>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
