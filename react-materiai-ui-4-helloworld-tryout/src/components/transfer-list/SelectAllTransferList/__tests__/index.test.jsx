import { createShallow, createRender, createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';
import { MockedTheme } from 'src/tests/MockedTheme';
import SelectAllTransferList from 'src/components/transfer-list/SelectAllTransferList/index.jsx';

describe('<SelectAllTransferList> helloworld', () => {
  describe('<SelectAllTransferList /> mount helloworld', () => {
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
          <SelectAllTransferList>SelectAllTransferList</SelectAllTransferList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SelectAllTransferList /> render helloworld', () => {
    let render;

    beforeEach(() => {
      render = createRender();
    });

    afterEach(() => {});

    test('should work', () => {
      const wrapper = render(
        <MockedTheme>
          <SelectAllTransferList>SelectAllTransferList</SelectAllTransferList>
        </MockedTheme>
      );

      expect(wrapper.html).toMatchSnapshot();
    });
  });

  describe('<SelectAllTransferList /> shallow helloworld', () => {
    let shallow;

    beforeEach(() => {
      // This is Mocha; in Jest, use beforeAll
      shallow = createShallow();
    });

    test('should work', () => {
      const wrapper = shallow(<SelectAllTransferList>SelectAllTransferList</SelectAllTransferList>);

      expect(wrapper.html).toMatchSnapshot();
    });
  });
})
