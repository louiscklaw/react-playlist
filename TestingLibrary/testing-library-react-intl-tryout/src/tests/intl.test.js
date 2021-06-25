import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// We're importing from our own created test-utils and not RTL's
import { render, screen, setupTests } from '../test-utils.js';
import { FormattedDate } from 'react-intl';

const FormatDateView = () => {
  return (
    <div data-testid="date-display">
      <FormattedDate
        value="2019-03-11"
        timeZone="utc"
        day="2-digit"
        month="2-digit"
        year="numeric"
      />
    </div>
  );
};

setupTests();

test('it should render FormattedDate and have a formatted pt date', () => {
  render(<FormatDateView />);
  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019');
});
