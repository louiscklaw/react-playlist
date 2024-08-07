// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import TabsWrappedLabel from 'src/components/tabs/TabsWrappedLabel/index.jsx';

describe('<TabsWrappedLabel> helloworld', () => {
  describe('<TabsWrappedLabel /> mount helloworld', () => {
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
          <TabsWrappedLabel>TabsWrappedLabel</TabsWrappedLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TabsWrappedLabel /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <TabsWrappedLabel>TabsWrappedLabel</TabsWrappedLabel>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<TabsWrappedLabel /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<TabsWrappedLabel>TabsWrappedLabel</TabsWrappedLabel>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
