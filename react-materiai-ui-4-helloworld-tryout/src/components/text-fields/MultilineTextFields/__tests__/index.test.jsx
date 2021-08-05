import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import MultilineTextFields from 'src/components/text-fields/MultilineTextFields/index.jsx';

describe('<MultilineTextFields> helloworld', () => {
  describe('<MultilineTextFields /> mount helloworld', () => {
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
          <MultilineTextFields>MultilineTextFields</MultilineTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MultilineTextFields /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <MultilineTextFields>MultilineTextFields</MultilineTextFields>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MultilineTextFields /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<MultilineTextFields>MultilineTextFields</MultilineTextFields>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
