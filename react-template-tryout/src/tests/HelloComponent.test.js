import { render } from '@testing-library/react';
import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

test('renders learn react link', () => {
  render(
    <GlobalContextProvider>
      <HelloComponent />
    </GlobalContextProvider>
  );
});
