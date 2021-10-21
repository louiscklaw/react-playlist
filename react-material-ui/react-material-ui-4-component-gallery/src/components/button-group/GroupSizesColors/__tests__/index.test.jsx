import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import GroupSizesColors from 'src/components/button-group/GroupSizesColors/index.jsx';

describe('<GroupSizesColors> helloworld', () => {
  describe('<GroupSizesColors /> mount helloworld', () => {
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
          <GroupSizesColors>GroupSizesColors</GroupSizesColors>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<GroupSizesColors /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <GroupSizesColors>GroupSizesColors</GroupSizesColors>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<GroupSizesColors /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<GroupSizesColors>GroupSizesColors</GroupSizesColors>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
