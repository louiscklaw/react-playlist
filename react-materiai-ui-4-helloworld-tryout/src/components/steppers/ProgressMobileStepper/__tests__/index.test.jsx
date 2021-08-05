import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ProgressMobileStepper from 'src/components/steppers/ProgressMobileStepper/index.jsx';

describe('<ProgressMobileStepper> helloworld', () => {
  describe('<ProgressMobileStepper /> mount helloworld', () => {
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
          <ProgressMobileStepper>ProgressMobileStepper</ProgressMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ProgressMobileStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ProgressMobileStepper>ProgressMobileStepper</ProgressMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ProgressMobileStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ProgressMobileStepper>ProgressMobileStepper</ProgressMobileStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
