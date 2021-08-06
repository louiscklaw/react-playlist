// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import OutlinedAlerts from 'src/components/alert/OutlinedAlerts/index.jsx';

describe('<OutlinedAlerts> helloworld', () => {
  describe('<OutlinedAlerts /> mount helloworld', () => {
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
          <OutlinedAlerts>OutlinedAlerts</OutlinedAlerts>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OutlinedAlerts /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <OutlinedAlerts>OutlinedAlerts</OutlinedAlerts>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OutlinedAlerts /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<OutlinedAlerts>OutlinedAlerts</OutlinedAlerts>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
