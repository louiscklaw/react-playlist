// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import UseAutocomplete from 'src/components/autocomplete/UseAutocomplete/index.jsx';

describe('<UseAutocomplete> helloworld', () => {
  describe('<UseAutocomplete /> mount helloworld', () => {
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
          <UseAutocomplete>UseAutocomplete</UseAutocomplete>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<UseAutocomplete /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <UseAutocomplete>UseAutocomplete</UseAutocomplete>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<UseAutocomplete /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<UseAutocomplete>UseAutocomplete</UseAutocomplete>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
