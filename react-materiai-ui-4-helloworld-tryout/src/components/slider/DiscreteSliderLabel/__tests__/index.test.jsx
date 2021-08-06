// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DiscreteSliderLabel from 'src/components/slider/DiscreteSliderLabel/index.jsx';

describe('<DiscreteSliderLabel> helloworld', () => {
  describe('<DiscreteSliderLabel /> mount helloworld', () => {
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
          <DiscreteSliderLabel>DiscreteSliderLabel</DiscreteSliderLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderLabel /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DiscreteSliderLabel>DiscreteSliderLabel</DiscreteSliderLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderLabel /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DiscreteSliderLabel>DiscreteSliderLabel</DiscreteSliderLabel>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
