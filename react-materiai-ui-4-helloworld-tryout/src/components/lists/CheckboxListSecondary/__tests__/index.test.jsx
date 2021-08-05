import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CheckboxListSecondary from 'src/components/lists/CheckboxListSecondary/index.jsx';

describe('<CheckboxListSecondary> helloworld', () => {
  describe('<CheckboxListSecondary /> mount helloworld', () => {
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
          <CheckboxListSecondary>CheckboxListSecondary</CheckboxListSecondary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CheckboxListSecondary /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CheckboxListSecondary>CheckboxListSecondary</CheckboxListSecondary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CheckboxListSecondary /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CheckboxListSecondary>CheckboxListSecondary</CheckboxListSecondary>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
