import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import AutoGridNoWrap from 'src/components/grid/AutoGridNoWrap/index.jsx';

describe('<AutoGridNoWrap> helloworld', () => {
  describe('<AutoGridNoWrap /> mount helloworld', () => {
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
          <AutoGridNoWrap>AutoGridNoWrap</AutoGridNoWrap>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AutoGridNoWrap /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <AutoGridNoWrap>AutoGridNoWrap</AutoGridNoWrap>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<AutoGridNoWrap /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<AutoGridNoWrap>AutoGridNoWrap</AutoGridNoWrap>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
