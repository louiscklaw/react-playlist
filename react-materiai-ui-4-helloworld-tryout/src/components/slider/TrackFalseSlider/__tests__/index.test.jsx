// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TrackFalseSlider from 'src/components/slider/TrackFalseSlider/index.jsx';

describe('<TrackFalseSlider> helloworld', () => {
  describe('<TrackFalseSlider /> mount helloworld', () => {
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
          <TrackFalseSlider>TrackFalseSlider</TrackFalseSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TrackFalseSlider /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TrackFalseSlider>TrackFalseSlider</TrackFalseSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TrackFalseSlider /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TrackFalseSlider>TrackFalseSlider</TrackFalseSlider>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
