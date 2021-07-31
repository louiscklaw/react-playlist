import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from 'src/App';

test('Crisp load', async () => {
  await render(<App />);

  await waitFor(() => expect(global.$crisp).toBeDefined());
  await waitFor(() =>
    expect(document.querySelector('.crisp-client')).toBeDefined()
  );
  await waitFor(() =>
    expect(global.CRISP_WEBSITE_ID).toMatch(
      /21171773-a1f2-406e-8b27-af0abb5b670a/
    )
  );
});
