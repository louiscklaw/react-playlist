// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HorizontalLinearAlternativeLabelStepper from 'src/components/steppers/HorizontalLinearAlternativeLabelStepper/index.jsx';

describe('<HorizontalLinearAlternativeLabelStepper> helloworld', () => {
  describe('<HorizontalLinearAlternativeLabelStepper /> mount helloworld', () => {
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
          <HorizontalLinearAlternativeLabelStepper>HorizontalLinearAlternativeLabelStepper</HorizontalLinearAlternativeLabelStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalLinearAlternativeLabelStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HorizontalLinearAlternativeLabelStepper>HorizontalLinearAlternativeLabelStepper</HorizontalLinearAlternativeLabelStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalLinearAlternativeLabelStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HorizontalLinearAlternativeLabelStepper>HorizontalLinearAlternativeLabelStepper</HorizontalLinearAlternativeLabelStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
