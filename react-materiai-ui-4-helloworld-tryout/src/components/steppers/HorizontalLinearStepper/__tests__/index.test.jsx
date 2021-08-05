import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HorizontalLinearStepper from 'src/components/steppers/HorizontalLinearStepper/index.jsx';

describe('<HorizontalLinearStepper> helloworld', () => {
  describe('<HorizontalLinearStepper /> mount helloworld', () => {
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
          <HorizontalLinearStepper>HorizontalLinearStepper</HorizontalLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalLinearStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HorizontalLinearStepper>HorizontalLinearStepper</HorizontalLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HorizontalLinearStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HorizontalLinearStepper>HorizontalLinearStepper</HorizontalLinearStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
