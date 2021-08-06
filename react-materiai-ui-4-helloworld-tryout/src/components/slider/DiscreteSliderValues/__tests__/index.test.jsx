import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DiscreteSliderValues from 'src/components/slider/DiscreteSliderValues/index.jsx';

describe('<DiscreteSliderValues> helloworld', () => {
  describe('<DiscreteSliderValues /> mount helloworld', () => {
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
          <DiscreteSliderValues>DiscreteSliderValues</DiscreteSliderValues>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderValues /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DiscreteSliderValues>DiscreteSliderValues</DiscreteSliderValues>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DiscreteSliderValues /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DiscreteSliderValues>DiscreteSliderValues</DiscreteSliderValues>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
