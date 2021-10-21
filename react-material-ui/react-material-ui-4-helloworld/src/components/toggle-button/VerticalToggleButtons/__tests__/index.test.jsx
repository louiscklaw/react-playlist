// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import VerticalToggleButtons from 'src/components/toggle-button/VerticalToggleButtons/index.jsx';

describe('<VerticalToggleButtons> helloworld', () => {
  describe('<VerticalToggleButtons /> mount helloworld', () => {
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
          <VerticalToggleButtons>VerticalToggleButtons</VerticalToggleButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VerticalToggleButtons /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <VerticalToggleButtons>VerticalToggleButtons</VerticalToggleButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VerticalToggleButtons /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<VerticalToggleButtons>VerticalToggleButtons</VerticalToggleButtons>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
