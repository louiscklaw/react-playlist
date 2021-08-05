import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PermanentDrawerLeft from 'src/components/drawers/PermanentDrawerLeft/index.jsx';

describe('<PermanentDrawerLeft> helloworld', () => {
  describe('<PermanentDrawerLeft /> mount helloworld', () => {
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
          <PermanentDrawerLeft>PermanentDrawerLeft</PermanentDrawerLeft>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PermanentDrawerLeft /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PermanentDrawerLeft>PermanentDrawerLeft</PermanentDrawerLeft>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PermanentDrawerLeft /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PermanentDrawerLeft>PermanentDrawerLeft</PermanentDrawerLeft>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
