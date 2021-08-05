import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import OutlinedTimeline from 'src/components/timeline/OutlinedTimeline/index.jsx';

describe('<OutlinedTimeline> helloworld', () => {
  describe('<OutlinedTimeline /> mount helloworld', () => {
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
          <OutlinedTimeline>OutlinedTimeline</OutlinedTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OutlinedTimeline /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <OutlinedTimeline>OutlinedTimeline</OutlinedTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OutlinedTimeline /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<OutlinedTimeline>OutlinedTimeline</OutlinedTimeline>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
