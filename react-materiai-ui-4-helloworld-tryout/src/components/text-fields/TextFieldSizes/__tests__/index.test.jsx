import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TextFieldSizes from 'src/components/text-fields/TextFieldSizes/index.jsx';

describe('<TextFieldSizes> helloworld', () => {
  describe('<TextFieldSizes /> mount helloworld', () => {
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
          <TextFieldSizes>TextFieldSizes</TextFieldSizes>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TextFieldSizes /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TextFieldSizes>TextFieldSizes</TextFieldSizes>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TextFieldSizes /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TextFieldSizes>TextFieldSizes</TextFieldSizes>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
