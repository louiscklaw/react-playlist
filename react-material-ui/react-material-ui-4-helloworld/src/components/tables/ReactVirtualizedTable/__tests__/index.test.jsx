// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ReactVirtualizedTable from 'src/components/tables/ReactVirtualizedTable/index.jsx';

describe('<ReactVirtualizedTable> helloworld', () => {
  describe('<ReactVirtualizedTable /> mount helloworld', () => {
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
          <ReactVirtualizedTable>ReactVirtualizedTable</ReactVirtualizedTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ReactVirtualizedTable /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ReactVirtualizedTable>ReactVirtualizedTable</ReactVirtualizedTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ReactVirtualizedTable /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ReactVirtualizedTable>ReactVirtualizedTable</ReactVirtualizedTable>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
