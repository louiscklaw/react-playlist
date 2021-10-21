import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import BasicButtonGroup from 'src/components/button-group/BasicButtonGroup/index.jsx';

describe('<BasicButtonGroup> helloworld', () => {
  describe('<BasicButtonGroup /> mount helloworld', () => {
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
          <BasicButtonGroup>BasicButtonGroup</BasicButtonGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<BasicButtonGroup /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <BasicButtonGroup>BasicButtonGroup</BasicButtonGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<BasicButtonGroup /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<BasicButtonGroup>BasicButtonGroup</BasicButtonGroup>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
