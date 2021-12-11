import React from 'react';
import styles from './styles.module.scss';

import { logo1 } from '../assets';

export default () => {
  return (
    <>
      <div className={styles.helloworld} style={{ position: 'absolute' }}>
        Login layout helloworld
      </div>
      <div className={styles.container}>
        <div
          className={styles.restaurant_logo}
          style={{
            backgroundImage: `url(${logo1})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}>
          restaurant_logo
        </div>
        <div
          className={styles.restaurant_image}
          style={{
            backgroundImage: `url(https://source.unsplash.com/1600x900/?nature,water)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          restaurant_image
        </div>
        <div className={styles.login_panel}>login_panel</div>
      </div>
    </>
  );
};
