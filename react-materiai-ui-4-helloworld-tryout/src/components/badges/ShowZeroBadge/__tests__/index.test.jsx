import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ShowZeroBadge from 'src/components/badges/ShowZeroBadge/index.jsx';

describe('<ShowZeroBadge> helloworld', () => {
  describe('<ShowZeroBadge /> mount helloworld', () => {
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
          <ShowZeroBadge>ShowZeroBadge</ShowZeroBadge>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ShowZeroBadge /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ShowZeroBadge>ShowZeroBadge</ShowZeroBadge>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ShowZeroBadge /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ShowZeroBadge>ShowZeroBadge</ShowZeroBadge>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
