import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import StickyHeadTable from 'src/components/tables/StickyHeadTable/index.jsx';

describe('<StickyHeadTable> helloworld', () => {
  describe('<StickyHeadTable /> mount helloworld', () => {
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
          <StickyHeadTable>StickyHeadTable</StickyHeadTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<StickyHeadTable /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <StickyHeadTable>StickyHeadTable</StickyHeadTable>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<StickyHeadTable /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<StickyHeadTable>StickyHeadTable</StickyHeadTable>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
