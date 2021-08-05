import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import CheckboxesGroup from 'src/components/checkboxes/CheckboxesGroup/index.jsx';

describe('<CheckboxesGroup> helloworld', () => {
  describe('<CheckboxesGroup /> mount helloworld', () => {
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
          <CheckboxesGroup>CheckboxesGroup</CheckboxesGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CheckboxesGroup /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <CheckboxesGroup>CheckboxesGroup</CheckboxesGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<CheckboxesGroup /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<CheckboxesGroup>CheckboxesGroup</CheckboxesGroup>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
