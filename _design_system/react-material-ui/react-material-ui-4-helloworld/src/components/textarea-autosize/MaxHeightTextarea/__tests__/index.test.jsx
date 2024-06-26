// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import MaxHeightTextarea from 'src/components/textarea-autosize/MaxHeightTextarea/index.jsx';

describe('<MaxHeightTextarea> helloworld', () => {
  describe('<MaxHeightTextarea /> mount helloworld', () => {
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
          <MaxHeightTextarea>MaxHeightTextarea</MaxHeightTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MaxHeightTextarea /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <MaxHeightTextarea>MaxHeightTextarea</MaxHeightTextarea>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<MaxHeightTextarea /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<MaxHeightTextarea>MaxHeightTextarea</MaxHeightTextarea>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
