// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SwitchListSecondary from 'src/components/lists/SwitchListSecondary/index.jsx';

describe('<SwitchListSecondary> helloworld', () => {
  describe('<SwitchListSecondary /> mount helloworld', () => {
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
          <SwitchListSecondary>SwitchListSecondary</SwitchListSecondary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwitchListSecondary /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SwitchListSecondary>SwitchListSecondary</SwitchListSecondary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SwitchListSecondary /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SwitchListSecondary>SwitchListSecondary</SwitchListSecondary>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
