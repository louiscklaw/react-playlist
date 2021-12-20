import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import {
  GetApp as GetAppIcon,
  Build as BuildIcon,
  Timer as TimerIcon,
  LocationOn as LocationOnIcon,
  LocationOff as LocationOffIcon,
  MonetizationOn as MonetizationOnIcon,
  DataUsage as DataUsageIcon,
  Battery20 as Battery20Icon,
  BatteryStd as BatteryStdIcon,
  Delete as DeleteIcon,
  GitHub as GitHubIcon,
  Share as ShareIcon,
  Telegram as TelegramIcon,
  Brightness7 as Brightness7Icon,
  NightsStay as NightsStayIcon,
  AllInclusive as AllInclusiveIcon,
  FilterAlt as FilterAltIcon,
} from '@mui/icons-material';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Snackbar,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { AppContext } from 'src/AppContext';

import vibrate from 'src/utils/vibrate';
import triggerShare from 'src/utils/triggerShare';

import Donations from '../../Donations';

const PREFIX = 'settings';

const ListPrimaryText = ({ children }) => {
  return (
    <Typography component="h2" variant="body1">
      {children}
    </Typography>
  );
};

export default ({ children }) => {
  const { t, i18n } = useTranslation();
  const {
    AppTitle,
    db,
    renewDb,
    geoPermission,
    updateGeoPermission,
    resetUsageRecord,
    isRouteFilter,
    toggleRouteFilter,
    etaFormat,
    toggleEtaFormat,
    colorMode,
    toggleColorMode,
    energyMode,
    toggleEnergyMode,
  } = React.useContext(AppContext);

  const [isOpenInstallDialog, setIsOpenInstallDialog] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [showGeoPermissionDenied, setShowGeoPermissionDenied] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const donationId = Math.floor(Math.random() * Donations.length);

  return (
    <>
      <Typography component="h1" style={visuallyHidden}>{`${t('設定')} - ${t(
        AppTitle
      )}`}</Typography>
      <List>
        {window.matchMedia('(display-mode: standalone)').matches ? null : (
          <ListItem
            button
            onClick={() => {
              vibrate(1);
              setTimeout(() => setIsOpenInstallDialog(true), 0);
            }}>
            <ListItemAvatar>
              <Avatar>
                <GetAppIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<ListPrimaryText>{t('安裝')}</ListPrimaryText>}
              secondary={t('安裝巴士預報 App 到裝置')}
              secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
            />
          </ListItem>
        )}

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            setUpdating(true);
            renewDb();
          }}>
          <ListItemAvatar>
            <Avatar>
              <BuildIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <ListPrimaryText>
                {t('架構版本') +
                  ': ' +
                  'schemaVersion' +
                  ' - ' +
                  'versionMd5.substr(0, 6)'}
              </ListPrimaryText>
            }
            secondary={t('更新時間') + ': ' + 'updateTime'}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            vibrate(1);
            if (geoPermission === 'granted') {
              updateGeoPermission('closed');
            } else {
              updateGeoPermission('opening', () => {
                setShowGeoPermissionDenied(true);
              });
            }
          }}>
          <ListItemAvatar>
            <Avatar>
              {geoPermission === 'granted' ? (
                <LocationOnIcon />
              ) : (
                <LocationOffIcon />
              )}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('地理位置定位功能')}</ListPrimaryText>}
            secondary={t(
              geoPermission === 'granted'
                ? '開啟'
                : geoPermission === 'opening'
                ? '開啟中...'
                : '關閉'
            )}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            toggleColorMode();
          }}>
          <ListItemAvatar>
            <Avatar>
              {colorMode === 'dark' ? <NightsStayIcon /> : <Brightness7Icon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t('黑夜模式')}
            secondary={t(colorMode === 'dark' ? '開啟' : '關閉')}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            toggleRouteFilter();
          }}>
          <ListItemAvatar>
            <Avatar>
              {isRouteFilter ? <FilterAltIcon /> : <AllInclusiveIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t('路線篩選')}
            secondary={t(isRouteFilter ? '只顯示現時路線' : '顯示所有路線')}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            toggleEtaFormat();
          }}>
          <ListItemAvatar>
            <Avatar>
              <TimerIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t('報時格式')}
            secondary={t(etaFormat === 'diff' ? '到站時差' : '到站時間')}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            toggleEnergyMode();
          }}>
          <ListItemAvatar>
            <Avatar>
              {energyMode ? <Battery20Icon /> : <BatteryStdIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={t('省電模式')}
            secondary={t(energyMode ? '開啟' : '關閉') + ' - ' + t('地圖功能')}
          />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            vibrate(1);
            resetUsageRecord();
          }}>
          <ListItemAvatar>
            <Avatar>
              <DeleteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('一鍵清空用戶記錄')}</ListPrimaryText>}
            secondary={t('包括鎖定和常用報時')}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>

        <Divider />
        <ListItem
          button
          onClick={() => {
            vibrate(1);
            triggerShare(
              `https://${window.location.hostname}`,
              t('巴士到站預報 App')
            ).then(() => {
              if (navigator.clipboard) setIsCopied(true);
            });
          }}>
          <ListItemAvatar>
            <Avatar>
              <ShareIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('複製應用程式鏈結')}</ListPrimaryText>}
            secondary={t('經不同媒介分享給親友')}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>

        <ListItem
          button
          component="a"
          href={`https://t.me/hkbusapp`}
          target="_blank"
          onClick={() => {
            vibrate(1);
          }}>
          <ListItemAvatar>
            <Avatar>
              <TelegramIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('Telegram 交流區')}</ListPrimaryText>}
            secondary={t('歡迎意見及技術交流')}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>

        <ListItem
          button
          component="a"
          href={Donations[donationId].url[i18n.language]}
          target="_blank"
          onClick={() => {
            vibrate(1);
          }}>
          <ListItemAvatar>
            <Avatar>
              <MonetizationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('捐款支持')}</ListPrimaryText>}
            secondary={Donations[donationId].description[i18n.language]}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          component={'a'}
          href={`https://github.com/hkbus/hk-independent-bus-eta`}
          target="_blank"
          onClick={() => {
            vibrate(1);
          }}>
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>Source code</ListPrimaryText>}
            secondary={'GPL-3.0 License'}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>
        <ListItem
          button
          component={'a'}
          href={`https://www.flaticon.com/free-icon/double-decker_1032967`}
          target="_blank"
          onClick={() => {
            vibrate(1);
          }}>
          <ListItemAvatar>
            <Avatar
              className={classes.icon}
              src="/logo128.png"
              alt="App Logo"></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('圖標來源')}</ListPrimaryText>}
            secondary={'Freepik from Flaticon'}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DataUsageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimaryText>{t('交通資料來源')}</ListPrimaryText>}
            secondary={t('資料一線通') + '  https://data.gov.hk'}
            secondaryTypographyProps={{ component: 'h3', variant: 'body2' }}
          />
        </ListItem>
      </List>
    </>
  );
};

const classes = {
  root: `${PREFIX}-root`,
  icon: `${PREFIX}-icon`,
};

const Root = styled(Paper)(({ theme }) => ({
  [`&.${classes.root}`]: {
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.background.default
        : 'white',
    height: 'calc(100vh - 120px)',
    overflowY: 'scroll',
    '& .MuiAvatar-colorDefault': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.background.default
          : 'white',
    },
  },
  [`& .${classes.icon}`]: {
    filter:
      theme.palette.mode === 'dark'
        ? 'grayscale(100%) brightness(0.5)'
        : 'none',
  },
}));
