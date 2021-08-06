import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CircularIndeterminate from 'src/components/progress/CircularIndeterminate/index.jsx';

describe('<CircularIndeterminate> helloworld', () => {
  describe('<CircularIndeterminate /> mount helloworld', () => {
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
          <CircularIndeterminate>CircularIndeterminate</CircularIndeterminate>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularIndeterminate /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CircularIndeterminate>CircularIndeterminate</CircularIndeterminate>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularIndeterminate /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CircularIndeterminate>CircularIndeterminate</CircularIndeterminate>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
