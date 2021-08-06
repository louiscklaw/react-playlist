// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import MultiSelectTreeView from 'src/components/tree-view/MultiSelectTreeView/index.jsx';

describe('<MultiSelectTreeView> helloworld', () => {
  describe('<MultiSelectTreeView /> mount helloworld', () => {
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
          <MultiSelectTreeView>MultiSelectTreeView</MultiSelectTreeView>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MultiSelectTreeView /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <MultiSelectTreeView>MultiSelectTreeView</MultiSelectTreeView>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MultiSelectTreeView /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<MultiSelectTreeView>MultiSelectTreeView</MultiSelectTreeView>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
