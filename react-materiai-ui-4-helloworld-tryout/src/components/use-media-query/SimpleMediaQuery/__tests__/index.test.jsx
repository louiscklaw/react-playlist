import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SimpleMediaQuery from 'src/components/use-media-query/SimpleMediaQuery/index.jsx';

describe('<SimpleMediaQuery> helloworld', () => {
  describe('<SimpleMediaQuery /> mount helloworld', () => {
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
          <SimpleMediaQuery>SimpleMediaQuery</SimpleMediaQuery>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleMediaQuery /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SimpleMediaQuery>SimpleMediaQuery</SimpleMediaQuery>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SimpleMediaQuery /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SimpleMediaQuery>SimpleMediaQuery</SimpleMediaQuery>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
