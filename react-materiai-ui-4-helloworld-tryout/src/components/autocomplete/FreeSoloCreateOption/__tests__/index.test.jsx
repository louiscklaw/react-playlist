import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import FreeSoloCreateOption from 'src/components/autocomplete/FreeSoloCreateOption/index.jsx';

describe('<FreeSoloCreateOption> helloworld', () => {
  describe('<FreeSoloCreateOption /> mount helloworld', () => {
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
          <FreeSoloCreateOption>FreeSoloCreateOption</FreeSoloCreateOption>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FreeSoloCreateOption /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <FreeSoloCreateOption>FreeSoloCreateOption</FreeSoloCreateOption>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<FreeSoloCreateOption /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<FreeSoloCreateOption>FreeSoloCreateOption</FreeSoloCreateOption>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
