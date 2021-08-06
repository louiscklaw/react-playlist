// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CircularWithValueLabel from 'src/components/progress/CircularWithValueLabel/index.jsx';

describe('<CircularWithValueLabel> helloworld', () => {
  describe('<CircularWithValueLabel /> mount helloworld', () => {
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
          <CircularWithValueLabel>CircularWithValueLabel</CircularWithValueLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularWithValueLabel /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CircularWithValueLabel>CircularWithValueLabel</CircularWithValueLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CircularWithValueLabel /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CircularWithValueLabel>CircularWithValueLabel</CircularWithValueLabel>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
