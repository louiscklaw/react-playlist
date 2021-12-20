import React from 'react';
import { styled } from '@mui/material/styles';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link, useLocation, useHistory } from 'react-router-dom';

export default ({}) => {
  const history = useHistory();

  const vibrate = (duration) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  };

  const handleClick = (link, e) => {
    e.preventDefault();
    vibrate(1);
    setTimeout(() => history.push(link), 0);
  };

  return (
    <>
      <Root
        value={'helloworld'}
        showLabels={true}
        classes={{ root: classes.root }}>
        Footer
        <BottomNavigationAction
          component={Link}
          to={`/helloworld1`}
          label={'常用1'}
          icon={<HomeIcon />}
          onClick={(e) => handleClick(`/helloworld1`, e)}
        />
        <BottomNavigationAction
          component={Link}
          to={`/helloworld2`}
          label={'常用2'}
          icon={<SearchIcon />}
          onClick={(e) => handleClick(`/helloworld2`, e)}
        />
        <BottomNavigationAction
          component={Link}
          to={`/helloworld3`}
          label={'常用3'}
          icon={<NearMeIcon />}
          onClick={(e) => handleClick(`/helloworld3`, e)}
        />
        <BottomNavigationAction
          component={Link}
          to={`/helloworld4`}
          label={'設定'}
          icon={<SettingsIcon />}
          onClick={(e) => handleClick(`/helloworld4`, e)}
        />
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
