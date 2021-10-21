// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import IconLabelButtons from 'src/components/buttons/IconLabelButtons/index.jsx';

describe('<IconLabelButtons> helloworld', () => {
  describe('<IconLabelButtons /> mount helloworld', () => {
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
          <IconLabelButtons>IconLabelButtons</IconLabelButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IconLabelButtons /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <IconLabelButtons>IconLabelButtons</IconLabelButtons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IconLabelButtons /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<IconLabelButtons>IconLabelButtons</IconLabelButtons>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
