// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CircularUnderLoad from 'src/components/progress/CircularUnderLoad/index.jsx';

describe('<CircularUnderLoad> helloworld', () => {
  describe('<CircularUnderLoad /> mount helloworld', () => {
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
          <CircularUnderLoad>CircularUnderLoad</CircularUnderLoad>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularUnderLoad /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CircularUnderLoad>CircularUnderLoad</CircularUnderLoad>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularUnderLoad /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CircularUnderLoad>CircularUnderLoad</CircularUnderLoad>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
