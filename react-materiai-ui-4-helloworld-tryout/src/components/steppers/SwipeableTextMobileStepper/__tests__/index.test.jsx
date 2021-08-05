import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SwipeableTextMobileStepper from 'src/components/steppers/SwipeableTextMobileStepper/index.jsx';

describe('<SwipeableTextMobileStepper> helloworld', () => {
  describe('<SwipeableTextMobileStepper /> mount helloworld', () => {
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
          <SwipeableTextMobileStepper>SwipeableTextMobileStepper</SwipeableTextMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwipeableTextMobileStepper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SwipeableTextMobileStepper>SwipeableTextMobileStepper</SwipeableTextMobileStepper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwipeableTextMobileStepper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SwipeableTextMobileStepper>SwipeableTextMobileStepper</SwipeableTextMobileStepper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
