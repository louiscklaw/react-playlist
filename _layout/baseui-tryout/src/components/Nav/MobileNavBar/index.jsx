import React, { useState } from 'react';
import { Navigation } from 'baseui/side-navigation';

import styles from './styles.module.scss';

import AvatarBadge from './AvatarBadge';
import { ArrowLeftCircle } from 'react-feather';

import { nav, nav_settings } from '../nav_config';

export default ({}) => {
  const [location, setLocation] = useState('#level1.1.1');
  return (
    <>
      <div className={styles.navbar_container}>
        <div>
          <ArrowLeftCircle />
        </div>
        <div>
          <AvatarBadge />
        </div>
        <div style={{ flex: 1 }}>
          <Navigation
            items={nav}
            activeItemId={location}
            onChange={({ item }) => setLocation(item.itemId)}
            mapItem={(test) => {
              console.log('test', test);
              return test;
            }}
            overrides={{
              NavItem: {
                style: (helloworld) => {
                  console.log('helloworld', helloworld);
                },
              },
              SubnavContainer: {
                style: (SubnavContainer_helloworld) => {
                  console.log(
                    'SubnavContainer_helloworld',
                    SubnavContainer_helloworld
                  );
                },
              },
            }}
          />
        </div>
        <div>
          <Navigation
            items={nav_settings}
            activeItemId={location}
            onChange={({ item }) => setLocation(item.itemId)}
            overrides={{
              NavItem: {
                style: ({ $active, $theme }) => {
                  if (!$active)
                    return { ':hover': { color: $theme.colors.positive400 } };
                  return {
                    backgroundColor: $theme.colors.positive400,
                    borderLeftColor: $theme.colors.mono900,
                    color: $theme.colors.mono900,
                    ':hover': { color: $theme.colors.positive400 },
                  };
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
