// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FormPropsTextFields from 'src/components/text-fields/FormPropsTextFields/index.jsx';

describe('<FormPropsTextFields> helloworld', () => {
  describe('<FormPropsTextFields /> mount helloworld', () => {
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
          <FormPropsTextFields>FormPropsTextFields</FormPropsTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormPropsTextFields /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FormPropsTextFields>FormPropsTextFields</FormPropsTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormPropsTextFields /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FormPropsTextFields>FormPropsTextFields</FormPropsTextFields>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
