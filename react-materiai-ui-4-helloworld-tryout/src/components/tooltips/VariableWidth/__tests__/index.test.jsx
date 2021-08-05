import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import VariableWidth from 'src/components/tooltips/VariableWidth/index.jsx';

describe('<VariableWidth> helloworld', () => {
  describe('<VariableWidth /> mount helloworld', () => {
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
          <VariableWidth>VariableWidth</VariableWidth>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VariableWidth /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <VariableWidth>VariableWidth</VariableWidth>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<VariableWidth /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<VariableWidth>VariableWidth</VariableWidth>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
