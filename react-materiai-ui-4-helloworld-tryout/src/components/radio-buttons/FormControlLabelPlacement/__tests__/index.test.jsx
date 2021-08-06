import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FormControlLabelPlacement from 'src/components/radio-buttons/FormControlLabelPlacement/index.jsx';

describe('<FormControlLabelPlacement> helloworld', () => {
  describe('<FormControlLabelPlacement /> mount helloworld', () => {
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
          <FormControlLabelPlacement>FormControlLabelPlacement</FormControlLabelPlacement>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormControlLabelPlacement /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FormControlLabelPlacement>FormControlLabelPlacement</FormControlLabelPlacement>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FormControlLabelPlacement /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FormControlLabelPlacement>FormControlLabelPlacement</FormControlLabelPlacement>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
