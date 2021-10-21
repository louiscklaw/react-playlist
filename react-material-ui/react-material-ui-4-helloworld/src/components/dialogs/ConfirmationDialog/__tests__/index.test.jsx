// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ConfirmationDialog from 'src/components/dialogs/ConfirmationDialog/index.jsx';

describe('<ConfirmationDialog> helloworld', () => {
  describe('<ConfirmationDialog /> mount helloworld', () => {
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
          <ConfirmationDialog>ConfirmationDialog</ConfirmationDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ConfirmationDialog /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ConfirmationDialog>ConfirmationDialog</ConfirmationDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ConfirmationDialog /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ConfirmationDialog>ConfirmationDialog</ConfirmationDialog>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
