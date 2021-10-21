// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedButtons from 'src/components/buttons/CustomizedButtons/index.jsx';

describe('<CustomizedButtons> helloworld', () => {
  describe('<CustomizedButtons /> mount helloworld', () => {
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
          <CustomizedButtons>CustomizedButtons</CustomizedButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedButtons /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedButtons>CustomizedButtons</CustomizedButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedButtons /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedButtons>CustomizedButtons</CustomizedButtons>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
