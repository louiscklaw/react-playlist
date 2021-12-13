import React, { useContext } from 'react';
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar';
import { ChevronDown, Delete, Overflow, Upload } from 'baseui/icon';

import styles from './styles.module.css';
import { BusContext } from '../../contexts/BusContext';
import NavBar from '../../components/Nav/NavBar';
import MobileNavBar from '../../components/Nav/MobileNavBar';
import TopBar from '../../components/TopBar';
import Body from './Body';

export default () => {
  let { viewport_height } = useContext(BusContext);
  let [show_nav_menu, setShowNavMenu] = React.useState(false);

  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: 'Main A' },
    {
      active: true,
      icon: ChevronDown,
      label: 'Main B',
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: 'Secondary A' },
        { icon: Upload, label: 'Secondary B' },
      ],
    },
  ]);

  const showNavMenu = () => {
    setShowNavMenu(true);
  };
  const hideNavMenu = () => {
    setShowNavMenu(false);
  };

  const toggleNavMenu = () => {
    if (show_nav_menu) {
      hideNavMenu();
    } else {
      showNavMenu();
    }
  };

  return (
    <>
      <div className={styles.fullscreen}>
        <div className={styles.top}>
          <TopBar toggleNavMenu={toggleNavMenu} />
        </div>
        <div className={styles.main}>
          <div className={styles.left_nav_menu}>
            <NavBar />
          </div>
          <div
            className={styles.mobile_nav_menu_container}
            style={{ display: show_nav_menu ? 'block' : 'none' }}
            onClick={toggleNavMenu}>
            <div
              className={styles.mobile_nav_menu}
              style={{ display: show_nav_menu ? 'block' : 'none' }}>
              <MobileNavBar
                show_nav_menu={show_nav_menu}
                hideNavMenu={hideNavMenu}
              />
            </div>
          </div>
          <div className={styles.right}>
            <Body />
          </div>
        </div>
      </div>
    </>
  );
};
