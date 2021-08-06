// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HorizontalNonLinearAlternativeLabelStepper from 'src/components/steppers/HorizontalNonLinearAlternativeLabelStepper/index.jsx';

describe('<HorizontalNonLinearAlternativeLabelStepper> helloworld', () => {
  describe('<HorizontalNonLinearAlternativeLabelStepper /> mount helloworld', () => {
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
          <HorizontalNonLinearAlternativeLabelStepper>HorizontalNonLinearAlternativeLabelStepper</HorizontalNonLinearAlternativeLabelStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearAlternativeLabelStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HorizontalNonLinearAlternativeLabelStepper>HorizontalNonLinearAlternativeLabelStepper</HorizontalNonLinearAlternativeLabelStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalNonLinearAlternativeLabelStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HorizontalNonLinearAlternativeLabelStepper>HorizontalNonLinearAlternativeLabelStepper</HorizontalNonLinearAlternativeLabelStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
