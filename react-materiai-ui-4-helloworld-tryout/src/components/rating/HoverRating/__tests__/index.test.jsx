import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import HoverRating from 'src/components/rating/HoverRating/index.jsx';

describe('<HoverRating> helloworld', () => {
  describe('<HoverRating /> mount helloworld', () => {
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
          <HoverRating>HoverRating</HoverRating>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HoverRating /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <HoverRating>HoverRating</HoverRating>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<HoverRating /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<HoverRating>HoverRating</HoverRating>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
