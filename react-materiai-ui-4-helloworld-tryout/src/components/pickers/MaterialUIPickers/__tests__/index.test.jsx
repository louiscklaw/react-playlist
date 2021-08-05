import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import MaterialUIPickers from 'src/components/pickers/MaterialUIPickers/index.jsx';

describe('<MaterialUIPickers> helloworld', () => {
  describe('<MaterialUIPickers /> mount helloworld', () => {
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
          <MaterialUIPickers>MaterialUIPickers</MaterialUIPickers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MaterialUIPickers /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <MaterialUIPickers>MaterialUIPickers</MaterialUIPickers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MaterialUIPickers /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<MaterialUIPickers>MaterialUIPickers</MaterialUIPickers>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
