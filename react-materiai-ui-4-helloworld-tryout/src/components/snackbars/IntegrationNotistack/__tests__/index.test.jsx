// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import IntegrationNotistack from 'src/components/snackbars/IntegrationNotistack/index.jsx';

describe('<IntegrationNotistack> helloworld', () => {
  describe('<IntegrationNotistack /> mount helloworld', () => {
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
          <IntegrationNotistack>IntegrationNotistack</IntegrationNotistack>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IntegrationNotistack /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <IntegrationNotistack>IntegrationNotistack</IntegrationNotistack>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<IntegrationNotistack /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<IntegrationNotistack>IntegrationNotistack</IntegrationNotistack>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
