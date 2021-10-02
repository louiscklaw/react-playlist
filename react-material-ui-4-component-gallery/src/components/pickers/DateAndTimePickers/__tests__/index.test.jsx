// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import DateAndTimePickers from 'src/components/pickers/DateAndTimePickers/index.jsx';

describe('<DateAndTimePickers> helloworld', () => {
  describe('<DateAndTimePickers /> mount helloworld', () => {
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
          <DateAndTimePickers>DateAndTimePickers</DateAndTimePickers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DateAndTimePickers /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <DateAndTimePickers>DateAndTimePickers</DateAndTimePickers>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<DateAndTimePickers /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<DateAndTimePickers>DateAndTimePickers</DateAndTimePickers>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
