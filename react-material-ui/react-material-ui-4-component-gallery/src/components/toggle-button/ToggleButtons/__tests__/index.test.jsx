// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ToggleButtons from 'src/components/toggle-button/ToggleButtons/index.jsx';

describe('<ToggleButtons> helloworld', () => {
  describe('<ToggleButtons /> mount helloworld', () => {
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
          <ToggleButtons>ToggleButtons</ToggleButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtons /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ToggleButtons>ToggleButtons</ToggleButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ToggleButtons /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ToggleButtons>ToggleButtons</ToggleButtons>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
