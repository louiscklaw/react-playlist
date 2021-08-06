// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import MinHeightTextarea from 'src/components/textarea-autosize/MinHeightTextarea/index.jsx';

describe('<MinHeightTextarea> helloworld', () => {
  describe('<MinHeightTextarea /> mount helloworld', () => {
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
          <MinHeightTextarea>MinHeightTextarea</MinHeightTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MinHeightTextarea /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <MinHeightTextarea>MinHeightTextarea</MinHeightTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MinHeightTextarea /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<MinHeightTextarea>MinHeightTextarea</MinHeightTextarea>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
