import React from 'react';
import { Avatar } from 'baseui/avatar';

import styles from './styles.module.scss';

export default () => {
  return (
    <>
      <div className={styles.avatar_badge_container}>
        <div className={styles.avatar_container}>
          <Avatar
            name={`user`}
            size={'64px'}
            src="https://not-a-real-image.png"
          />
        </div>
        <div className={styles.name_plate_container}>
          <div>useremail@123.com</div>
          <div>username</div>
        </div>
      </div>
    </>
  );
};
