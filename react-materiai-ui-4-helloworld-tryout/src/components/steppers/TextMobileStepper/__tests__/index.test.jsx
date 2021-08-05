import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TextMobileStepper from 'src/components/steppers/TextMobileStepper/index.jsx';

describe('<TextMobileStepper> helloworld', () => {
  describe('<TextMobileStepper /> mount helloworld', () => {
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
          <TextMobileStepper>TextMobileStepper</TextMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TextMobileStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TextMobileStepper>TextMobileStepper</TextMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TextMobileStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TextMobileStepper>TextMobileStepper</TextMobileStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
