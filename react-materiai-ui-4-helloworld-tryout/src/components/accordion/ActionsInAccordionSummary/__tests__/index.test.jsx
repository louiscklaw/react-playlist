import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import ActionsInAccordionSummary from 'src/components/accordion/ActionsInAccordionSummary/index.jsx';

describe('<ActionsInAccordionSummary> helloworld', () => {
  describe('<ActionsInAccordionSummary /> mount helloworld', () => {
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
          <ActionsInAccordionSummary>ActionsInAccordionSummary</ActionsInAccordionSummary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ActionsInAccordionSummary /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <ActionsInAccordionSummary>ActionsInAccordionSummary</ActionsInAccordionSummary>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<ActionsInAccordionSummary /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<ActionsInAccordionSummary>ActionsInAccordionSummary</ActionsInAccordionSummary>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
