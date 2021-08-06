// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FreeSoloCreateOptionDialog from 'src/components/autocomplete/FreeSoloCreateOptionDialog/index.jsx';

describe('<FreeSoloCreateOptionDialog> helloworld', () => {
  describe('<FreeSoloCreateOptionDialog /> mount helloworld', () => {
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
          <FreeSoloCreateOptionDialog>FreeSoloCreateOptionDialog</FreeSoloCreateOptionDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FreeSoloCreateOptionDialog /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FreeSoloCreateOptionDialog>FreeSoloCreateOptionDialog</FreeSoloCreateOptionDialog>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FreeSoloCreateOptionDialog /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FreeSoloCreateOptionDialog>FreeSoloCreateOptionDialog</FreeSoloCreateOptionDialog>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
