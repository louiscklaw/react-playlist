import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import RightAlignedTimeline from 'src/components/timeline/RightAlignedTimeline/index.jsx';

describe('<RightAlignedTimeline> helloworld', () => {
  describe('<RightAlignedTimeline /> mount helloworld', () => {
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
          <RightAlignedTimeline>RightAlignedTimeline</RightAlignedTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RightAlignedTimeline /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <RightAlignedTimeline>RightAlignedTimeline</RightAlignedTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RightAlignedTimeline /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<RightAlignedTimeline>RightAlignedTimeline</RightAlignedTimeline>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
