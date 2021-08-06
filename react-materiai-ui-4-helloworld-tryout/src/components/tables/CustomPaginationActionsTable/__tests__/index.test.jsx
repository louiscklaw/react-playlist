import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomPaginationActionsTable from 'src/components/tables/CustomPaginationActionsTable/index.jsx';

describe('<CustomPaginationActionsTable> helloworld', () => {
  describe('<CustomPaginationActionsTable /> mount helloworld', () => {
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
          <CustomPaginationActionsTable>CustomPaginationActionsTable</CustomPaginationActionsTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomPaginationActionsTable /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomPaginationActionsTable>CustomPaginationActionsTable</CustomPaginationActionsTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomPaginationActionsTable /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomPaginationActionsTable>CustomPaginationActionsTable</CustomPaginationActionsTable>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
