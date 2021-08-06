// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import RadioButtonsGroup from 'src/components/radio-buttons/RadioButtonsGroup/index.jsx';

describe('<RadioButtonsGroup> helloworld', () => {
  describe('<RadioButtonsGroup /> mount helloworld', () => {
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
          <RadioButtonsGroup>RadioButtonsGroup</RadioButtonsGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RadioButtonsGroup /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <RadioButtonsGroup>RadioButtonsGroup</RadioButtonsGroup>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RadioButtonsGroup /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<RadioButtonsGroup>RadioButtonsGroup</RadioButtonsGroup>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
