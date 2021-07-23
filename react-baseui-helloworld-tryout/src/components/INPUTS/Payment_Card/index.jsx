import * as React from 'react';
import { PaymentCard } from 'baseui/payment-card';

export default () => {
  const [value, setValue] = React.useState('');
  return (
    <PaymentCard
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearOnEscape
      placeholder="Please enter your credit card number..."
    />
  );
};
