// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ResponsiveDialog from 'src/components/dialogs/ResponsiveDialog/index.jsx';

describe('<ResponsiveDialog> helloworld', () => {
  describe('<ResponsiveDialog /> mount helloworld', () => {
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
          <ResponsiveDialog>ResponsiveDialog</ResponsiveDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ResponsiveDialog /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ResponsiveDialog>ResponsiveDialog</ResponsiveDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ResponsiveDialog /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ResponsiveDialog>ResponsiveDialog</ResponsiveDialog>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
