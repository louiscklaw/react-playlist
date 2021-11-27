import React from 'react';
import {
  Layout,
  Nav,
  Button,
  Breadcrumb,
  Skeleton,
  Avatar,
} from '@douyinfe/semi-ui';
import {
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
} from '@douyinfe/semi-icons';

export default function TestNav() {
  return (
    <Nav
      defaultSelectedKeys={['Home']}
      style={{ maxWidth: 220, height: '100%' }}
      items={[
        { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
        {
          itemKey: 'Histogram',
          text: '基础数据',
          icon: <IconHistogram size="large" />,
        },
        {
          itemKey: 'Live',
          text: '测试功能',
          icon: <IconLive size="large" />,
        },
        {
          itemKey: 'Setting',
          text: '设置',
          icon: <IconSetting size="large" />,
        },
      ]}
      header={{
        logo: (
          <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />
        ),
        text: '直播运营后台',
      }}
      footer={{
        collapseButton: true,
      }}
    />
  );
}
