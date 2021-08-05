import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import AlertDialogSlide from 'src/components/dialogs/AlertDialogSlide/index.jsx';

describe('<AlertDialogSlide> helloworld', () => {
  describe('<AlertDialogSlide /> mount helloworld', () => {
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
          <AlertDialogSlide>AlertDialogSlide</AlertDialogSlide>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AlertDialogSlide /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <AlertDialogSlide>AlertDialogSlide</AlertDialogSlide>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AlertDialogSlide /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<AlertDialogSlide>AlertDialogSlide</AlertDialogSlide>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
