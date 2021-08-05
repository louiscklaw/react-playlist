import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CustomizedRatings from 'src/components/rating/CustomizedRatings/index.jsx';

describe('<CustomizedRatings> helloworld', () => {
  describe('<CustomizedRatings /> mount helloworld', () => {
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
          <CustomizedRatings>CustomizedRatings</CustomizedRatings>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedRatings /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CustomizedRatings>CustomizedRatings</CustomizedRatings>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CustomizedRatings /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CustomizedRatings>CustomizedRatings</CustomizedRatings>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
