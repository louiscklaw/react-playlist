import React from 'react';
import { useTranslation } from 'react-i18next';

import 'src/lang';

export default function CustomComponent() {
  const { t } = useTranslation();

  return <div>{t('description.part2')}</div>;
}
