import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import RecursiveTreeView from 'src/components/tree-view/RecursiveTreeView/index.jsx';

describe('<RecursiveTreeView> helloworld', () => {
  describe('<RecursiveTreeView /> mount helloworld', () => {
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
          <RecursiveTreeView>RecursiveTreeView</RecursiveTreeView>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RecursiveTreeView /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <RecursiveTreeView>RecursiveTreeView</RecursiveTreeView>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RecursiveTreeView /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<RecursiveTreeView>RecursiveTreeView</RecursiveTreeView>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
