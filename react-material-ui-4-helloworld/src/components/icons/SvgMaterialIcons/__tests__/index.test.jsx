// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SvgMaterialIcons from 'src/components/icons/SvgMaterialIcons/index.jsx';

describe('<SvgMaterialIcons> helloworld', () => {
  describe('<SvgMaterialIcons /> mount helloworld', () => {
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
          <SvgMaterialIcons>SvgMaterialIcons</SvgMaterialIcons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SvgMaterialIcons /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SvgMaterialIcons>SvgMaterialIcons</SvgMaterialIcons>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SvgMaterialIcons /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SvgMaterialIcons>SvgMaterialIcons</SvgMaterialIcons>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
