import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FormControlLabelPosition from 'src/components/checkboxes/FormControlLabelPosition/index.jsx';

describe('<FormControlLabelPosition> helloworld', () => {
  describe('<FormControlLabelPosition /> mount helloworld', () => {
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
          <FormControlLabelPosition>FormControlLabelPosition</FormControlLabelPosition>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormControlLabelPosition /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FormControlLabelPosition>FormControlLabelPosition</FormControlLabelPosition>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormControlLabelPosition /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FormControlLabelPosition>FormControlLabelPosition</FormControlLabelPosition>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
