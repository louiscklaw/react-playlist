import * as React from 'react';
import { EmoticonRating } from 'baseui/rating';

export default () => {
  const [value, setValue] = React.useState(4);
  return (
    <EmoticonRating
      numItems={5}
      onChange={(data) => setValue(data.value)}
      size={22}
      value={value}
    />
  );
};
