// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TrackInvertedSlider from 'src/components/slider/TrackInvertedSlider/index.jsx';

describe('<TrackInvertedSlider> helloworld', () => {
  describe('<TrackInvertedSlider /> mount helloworld', () => {
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
          <TrackInvertedSlider>TrackInvertedSlider</TrackInvertedSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TrackInvertedSlider /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TrackInvertedSlider>TrackInvertedSlider</TrackInvertedSlider>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TrackInvertedSlider /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TrackInvertedSlider>TrackInvertedSlider</TrackInvertedSlider>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
