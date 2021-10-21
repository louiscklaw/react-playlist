// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DiscreteSliderSteps from 'src/components/slider/DiscreteSliderSteps/index.jsx';

describe('<DiscreteSliderSteps> helloworld', () => {
  describe('<DiscreteSliderSteps /> mount helloworld', () => {
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
          <DiscreteSliderSteps>DiscreteSliderSteps</DiscreteSliderSteps>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderSteps /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DiscreteSliderSteps>DiscreteSliderSteps</DiscreteSliderSteps>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderSteps /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DiscreteSliderSteps>DiscreteSliderSteps</DiscreteSliderSteps>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
