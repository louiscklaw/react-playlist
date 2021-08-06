import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import LinearIndeterminate from 'src/components/progress/LinearIndeterminate/index.jsx';

describe('<LinearIndeterminate> helloworld', () => {
  describe('<LinearIndeterminate /> mount helloworld', () => {
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
          <LinearIndeterminate>LinearIndeterminate</LinearIndeterminate>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LinearIndeterminate /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <LinearIndeterminate>LinearIndeterminate</LinearIndeterminate>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LinearIndeterminate /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<LinearIndeterminate>LinearIndeterminate</LinearIndeterminate>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
