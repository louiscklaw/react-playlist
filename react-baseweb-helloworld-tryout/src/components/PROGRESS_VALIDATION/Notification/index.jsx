import * as React from 'react';
import { Notification } from 'baseui/notification';

export default () => {
  return <Notification>{() => 'This is a notification.'}</Notification>;
};
