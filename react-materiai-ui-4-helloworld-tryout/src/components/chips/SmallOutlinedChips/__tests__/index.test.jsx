import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SmallOutlinedChips from 'src/components/chips/SmallOutlinedChips/index.jsx';

describe('<SmallOutlinedChips> helloworld', () => {
  describe('<SmallOutlinedChips /> mount helloworld', () => {
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
          <SmallOutlinedChips>SmallOutlinedChips</SmallOutlinedChips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SmallOutlinedChips /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SmallOutlinedChips>SmallOutlinedChips</SmallOutlinedChips>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SmallOutlinedChips /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SmallOutlinedChips>SmallOutlinedChips</SmallOutlinedChips>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
