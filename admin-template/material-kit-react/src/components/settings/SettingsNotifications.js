import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@material-ui/core';

const SettingsNotifications = (props) => {
  const { t } = useTranslation();

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader={t('ManageTheNotifications')} title={t('Notifications')} />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid item md={4} sm={6} sx={{ display: 'flex', flexDirection: 'column' }} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                {t('Notifications')}
              </Typography>
              <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label={t('Email')} />
              <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label={t('PushNotifications')} />
              <FormControlLabel control={<Checkbox />} label={t('TextMessages')} />
              <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label={t('PhoneCalls')} />
            </Grid>
            <Grid item md={4} sm={6} sx={{ display: 'flex', flexDirection: 'column' }} xs={12}>
              <Typography color="textPrimary" gutterBottom variant="h6">
                {t('Messages')}
              </Typography>
              <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label={t('Email')} />
              <FormControlLabel control={<Checkbox />} label={t('PushNotifications')} />
              <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label={t('PhoneCalls')} />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button color="primary" variant="contained">
            {t('Save')}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsNotifications;
