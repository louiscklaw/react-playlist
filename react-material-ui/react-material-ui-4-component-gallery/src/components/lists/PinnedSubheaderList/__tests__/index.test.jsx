// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PinnedSubheaderList from 'src/components/lists/PinnedSubheaderList/index.jsx';

describe('<PinnedSubheaderList> helloworld', () => {
  describe('<PinnedSubheaderList /> mount helloworld', () => {
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
          <PinnedSubheaderList>PinnedSubheaderList</PinnedSubheaderList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PinnedSubheaderList /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PinnedSubheaderList>PinnedSubheaderList</PinnedSubheaderList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PinnedSubheaderList /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PinnedSubheaderList>PinnedSubheaderList</PinnedSubheaderList>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
