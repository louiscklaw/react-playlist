import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import PrimarySearchAppBar from 'src/components/app-bar/PrimarySearchAppBar/index.jsx';

describe('<PrimarySearchAppBar> helloworld', () => {
  describe('<PrimarySearchAppBar /> mount helloworld', () => {
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
          <PrimarySearchAppBar>PrimarySearchAppBar</PrimarySearchAppBar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PrimarySearchAppBar /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <PrimarySearchAppBar>PrimarySearchAppBar</PrimarySearchAppBar>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<PrimarySearchAppBar /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<PrimarySearchAppBar>PrimarySearchAppBar</PrimarySearchAppBar>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})