// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ControlledOpenSelect from 'src/components/selects/ControlledOpenSelect/index.jsx';

describe('<ControlledOpenSelect> helloworld', () => {
  describe('<ControlledOpenSelect /> mount helloworld', () => {
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
          <ControlledOpenSelect>ControlledOpenSelect</ControlledOpenSelect>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ControlledOpenSelect /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ControlledOpenSelect>ControlledOpenSelect</ControlledOpenSelect>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ControlledOpenSelect /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ControlledOpenSelect>ControlledOpenSelect</ControlledOpenSelect>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
