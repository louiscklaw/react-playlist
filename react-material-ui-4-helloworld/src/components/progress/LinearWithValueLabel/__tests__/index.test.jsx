// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import LinearWithValueLabel from 'src/components/progress/LinearWithValueLabel/index.jsx';

describe('<LinearWithValueLabel> helloworld', () => {
  describe('<LinearWithValueLabel /> mount helloworld', () => {
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
          <LinearWithValueLabel>LinearWithValueLabel</LinearWithValueLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LinearWithValueLabel /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <LinearWithValueLabel>LinearWithValueLabel</LinearWithValueLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LinearWithValueLabel /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<LinearWithValueLabel>LinearWithValueLabel</LinearWithValueLabel>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
