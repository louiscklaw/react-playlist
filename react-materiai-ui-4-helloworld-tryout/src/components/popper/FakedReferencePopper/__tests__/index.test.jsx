import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FakedReferencePopper from 'src/components/popper/FakedReferencePopper/index.jsx';

describe('<FakedReferencePopper> helloworld', () => {
  describe('<FakedReferencePopper /> mount helloworld', () => {
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
          <FakedReferencePopper>FakedReferencePopper</FakedReferencePopper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FakedReferencePopper /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FakedReferencePopper>FakedReferencePopper</FakedReferencePopper>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FakedReferencePopper /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FakedReferencePopper>FakedReferencePopper</FakedReferencePopper>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
