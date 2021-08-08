// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DiscreteSliderMarks from 'src/components/slider/DiscreteSliderMarks/index.jsx';

describe('<DiscreteSliderMarks> helloworld', () => {
  describe('<DiscreteSliderMarks /> mount helloworld', () => {
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
          <DiscreteSliderMarks>DiscreteSliderMarks</DiscreteSliderMarks>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderMarks /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DiscreteSliderMarks>DiscreteSliderMarks</DiscreteSliderMarks>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderMarks /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DiscreteSliderMarks>DiscreteSliderMarks</DiscreteSliderMarks>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
