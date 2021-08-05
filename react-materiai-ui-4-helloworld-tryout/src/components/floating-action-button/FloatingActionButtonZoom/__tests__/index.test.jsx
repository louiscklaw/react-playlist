import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FloatingActionButtonZoom from 'src/components/floating-action-button/FloatingActionButtonZoom/index.jsx';

describe('<FloatingActionButtonZoom> helloworld', () => {
  describe('<FloatingActionButtonZoom /> mount helloworld', () => {
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
          <FloatingActionButtonZoom>FloatingActionButtonZoom</FloatingActionButtonZoom>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FloatingActionButtonZoom /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FloatingActionButtonZoom>FloatingActionButtonZoom</FloatingActionButtonZoom>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FloatingActionButtonZoom /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FloatingActionButtonZoom>FloatingActionButtonZoom</FloatingActionButtonZoom>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
