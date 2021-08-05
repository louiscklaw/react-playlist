import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import VerticalLinearStepper from 'src/components/steppers/VerticalLinearStepper/index.jsx';

describe('<VerticalLinearStepper> helloworld', () => {
  describe('<VerticalLinearStepper /> mount helloworld', () => {
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
          <VerticalLinearStepper>VerticalLinearStepper</VerticalLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VerticalLinearStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <VerticalLinearStepper>VerticalLinearStepper</VerticalLinearStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VerticalLinearStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<VerticalLinearStepper>VerticalLinearStepper</VerticalLinearStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
