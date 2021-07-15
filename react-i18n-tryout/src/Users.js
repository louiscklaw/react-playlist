import React from 'react';

import { useTranslation } from 'react-i18next';

export default function Users() {
  const { t } = useTranslation();
  return <h2>{t('Users')}</h2>;
}
