import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import EmptyTextarea from 'src/components/textarea-autosize/EmptyTextarea/index.jsx';

describe('<EmptyTextarea> helloworld', () => {
  describe('<EmptyTextarea /> mount helloworld', () => {
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
          <EmptyTextarea>EmptyTextarea</EmptyTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<EmptyTextarea /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <EmptyTextarea>EmptyTextarea</EmptyTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<EmptyTextarea /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<EmptyTextarea>EmptyTextarea</EmptyTextarea>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
