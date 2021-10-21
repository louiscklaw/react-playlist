// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HorizontalNonLinearStepper from 'src/components/steppers/HorizontalNonLinearStepper/index.jsx';

describe('<HorizontalNonLinearStepper> helloworld', () => {
  describe('<HorizontalNonLinearStepper /> mount helloworld', () => {
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
          <HorizontalNonLinearStepper>HorizontalNonLinearStepper</HorizontalNonLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HorizontalNonLinearStepper>HorizontalNonLinearStepper</HorizontalNonLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HorizontalNonLinearStepper>HorizontalNonLinearStepper</HorizontalNonLinearStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
