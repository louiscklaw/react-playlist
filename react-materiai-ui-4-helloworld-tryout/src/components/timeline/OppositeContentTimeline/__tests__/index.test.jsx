// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import OppositeContentTimeline from 'src/components/timeline/OppositeContentTimeline/index.jsx';

describe('<OppositeContentTimeline> helloworld', () => {
  describe('<OppositeContentTimeline /> mount helloworld', () => {
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
          <OppositeContentTimeline>OppositeContentTimeline</OppositeContentTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OppositeContentTimeline /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <OppositeContentTimeline>OppositeContentTimeline</OppositeContentTimeline>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<OppositeContentTimeline /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<OppositeContentTimeline>OppositeContentTimeline</OppositeContentTimeline>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
