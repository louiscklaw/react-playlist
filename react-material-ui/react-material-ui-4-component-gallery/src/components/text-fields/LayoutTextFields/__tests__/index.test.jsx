// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import LayoutTextFields from 'src/components/text-fields/LayoutTextFields/index.jsx';

describe('<LayoutTextFields> helloworld', () => {
  describe('<LayoutTextFields /> mount helloworld', () => {
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
          <LayoutTextFields>LayoutTextFields</LayoutTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LayoutTextFields /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <LayoutTextFields>LayoutTextFields</LayoutTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<LayoutTextFields /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<LayoutTextFields>LayoutTextFields</LayoutTextFields>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
