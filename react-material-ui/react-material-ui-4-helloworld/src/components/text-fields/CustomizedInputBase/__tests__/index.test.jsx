// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedInputBase from 'src/components/text-fields/CustomizedInputBase/index.jsx';

describe('<CustomizedInputBase> helloworld', () => {
  describe('<CustomizedInputBase /> mount helloworld', () => {
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
          <CustomizedInputBase>CustomizedInputBase</CustomizedInputBase>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedInputBase /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedInputBase>CustomizedInputBase</CustomizedInputBase>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedInputBase /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedInputBase>CustomizedInputBase</CustomizedInputBase>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
