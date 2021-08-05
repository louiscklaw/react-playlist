import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomInputAutocomplete from 'src/components/autocomplete/CustomInputAutocomplete/index.jsx';

describe('<CustomInputAutocomplete> helloworld', () => {
  describe('<CustomInputAutocomplete /> mount helloworld', () => {
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
          <CustomInputAutocomplete>CustomInputAutocomplete</CustomInputAutocomplete>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomInputAutocomplete /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomInputAutocomplete>CustomInputAutocomplete</CustomInputAutocomplete>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomInputAutocomplete /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomInputAutocomplete>CustomInputAutocomplete</CustomInputAutocomplete>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
