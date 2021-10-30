import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';

const SettingsPassword = (props) => {
  const { t } = useTranslation();

  const [values, setValues] = useState({ password: '', confirm: '' });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader={t('UpdatePassword')} title={t('Password')} />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label={t('Password')}
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label={t('ConfirmPassword')}
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button color="primary" variant="contained">
            {t('Update')}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
