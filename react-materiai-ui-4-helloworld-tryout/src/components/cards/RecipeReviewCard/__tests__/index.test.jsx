// component_test_template
import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import RecipeReviewCard from 'src/components/cards/RecipeReviewCard/index.jsx';

describe('<RecipeReviewCard> helloworld', () => {
  describe('<RecipeReviewCard /> mount helloworld', () => {
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
          <RecipeReviewCard>RecipeReviewCard</RecipeReviewCard>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RecipeReviewCard /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <RecipeReviewCard>RecipeReviewCard</RecipeReviewCard>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<RecipeReviewCard /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<RecipeReviewCard>RecipeReviewCard</RecipeReviewCard>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
