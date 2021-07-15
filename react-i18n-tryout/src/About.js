import React from 'react';

import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return <h2>{t('About')}</h2>;
}
