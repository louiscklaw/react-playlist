// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HorizontalNonLinearStepperWithError from 'src/components/steppers/HorizontalNonLinearStepperWithError/index.jsx';

describe('<HorizontalNonLinearStepperWithError> helloworld', () => {
  describe('<HorizontalNonLinearStepperWithError /> mount helloworld', () => {
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
          <HorizontalNonLinearStepperWithError>HorizontalNonLinearStepperWithError</HorizontalNonLinearStepperWithError>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearStepperWithError /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HorizontalNonLinearStepperWithError>HorizontalNonLinearStepperWithError</HorizontalNonLinearStepperWithError>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearStepperWithError /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HorizontalNonLinearStepperWithError>HorizontalNonLinearStepperWithError</HorizontalNonLinearStepperWithError>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
