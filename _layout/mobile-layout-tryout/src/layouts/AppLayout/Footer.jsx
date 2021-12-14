import React from 'react';
import { styled } from '@mui/material/styles';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';

export default ({}) => {
  return (
    <>
      <Root
        value={'helloworld'}
        showLabels={true}
        classes={{ root: classes.root }}>
        Footer
        <BottomNavigationAction label={'常用1'} icon={<HomeIcon />} />
        <BottomNavigationAction label={'常用2'} icon={<SearchIcon />} />
        <BottomNavigationAction label={'常用3'} icon={<NearMeIcon />} />
        <BottomNavigationAction label={'設定'} icon={<SettingsIcon />} />
      </Root>
    </>
  );
};

const PREFIX = 'footer';

const classes = {
  root: `${PREFIX}-root`,
  selected: `${PREFIX}-selected`,
};

const Root = styled(BottomNavigation)(({ theme }) => ({
  [`&.${classes.root}`]: {
    marginTop: '10px',
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : theme.palette.primary.main,
    position: 'sticky',
    bottom: '0',
    height: 'initial',
    [`& .MuiBottomNavigationAction-root`]: {
      width: '20%',
      minWidth: 0,
    },
    [`& .Mui-selected.${classes.selected}`]: {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.primary.main
          : theme.palette.text.primary,
    },
  },
}));
