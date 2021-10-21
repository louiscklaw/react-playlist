// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedSteppers from 'src/components/steppers/CustomizedSteppers/index.jsx';

describe('<CustomizedSteppers> helloworld', () => {
  describe('<CustomizedSteppers /> mount helloworld', () => {
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
          <CustomizedSteppers>CustomizedSteppers</CustomizedSteppers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedSteppers /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedSteppers>CustomizedSteppers</CustomizedSteppers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedSteppers /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedSteppers>CustomizedSteppers</CustomizedSteppers>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
