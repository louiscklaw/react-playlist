// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FloatingActionButtonSize from 'src/components/floating-action-button/FloatingActionButtonSize/index.jsx';

describe('<FloatingActionButtonSize> helloworld', () => {
  describe('<FloatingActionButtonSize /> mount helloworld', () => {
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
          <FloatingActionButtonSize>FloatingActionButtonSize</FloatingActionButtonSize>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FloatingActionButtonSize /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FloatingActionButtonSize>FloatingActionButtonSize</FloatingActionButtonSize>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FloatingActionButtonSize /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FloatingActionButtonSize>FloatingActionButtonSize</FloatingActionButtonSize>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
