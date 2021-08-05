import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DescriptionAlerts from 'src/components/alert/DescriptionAlerts/index.jsx';

describe('<DescriptionAlerts> helloworld', () => {
  describe('<DescriptionAlerts /> mount helloworld', () => {
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
          <DescriptionAlerts>DescriptionAlerts</DescriptionAlerts>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DescriptionAlerts /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DescriptionAlerts>DescriptionAlerts</DescriptionAlerts>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DescriptionAlerts /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DescriptionAlerts>DescriptionAlerts</DescriptionAlerts>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
