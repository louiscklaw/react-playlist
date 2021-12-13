import * as React from 'react';
import { Button, SHAPE, KIND } from 'baseui/button';

import { Mail, Bell, Menu } from 'react-feather';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

import { BusContext } from '../../contexts/BusContext';

const ITEMS = [
  { label: 'Item One' },
  { label: 'Item Two' },
  { label: 'Item Three' },
  { label: 'Item Four' },
  { label: 'Item Five' },
  { label: 'Item Six' },
  { label: 'Item Seven' },
  { label: 'Item Eight' },
  { label: 'Item Nine' },
  { label: 'Item Ten' },
  { label: 'Item Eleven' },
  { label: 'Item Twelve' },
];

const options = {
  options: [
    { id: 'AliceBlue', color: '#F0F8FF' },
    { id: 'AntiqueWhite', color: '#FAEBD7' },
    { id: 'Aqua', color: '#00FFFF' },
    { id: 'Aquamarine', color: '#7FFFD4' },
    { id: 'Azure', color: '#F0FFFF' },
    { id: 'Beige', color: '#F5F5DC' },
    { id: 'Bisque', color: '#FFE4C4' },
    { id: 'Black', color: '#000000' },
  ],
  labelKey: 'id',
  valueKey: 'color',
  placeholder: 'Search colors',
  maxDropdownHeight: '300px',
};
export default ({ toggleNavMenu }) => {
  let {
    viewport_width,
    viewport_height,
    setViewportWidth,
    setViewportHeight,
    viewport_width_category,
    setViewportWidthCategory,
  } = React.useContext(BusContext);

  return (
    <HeaderNavigation overrides={{ Root: { style: { padding: '1rem' } } }}>
      <NavigationList $align={ALIGN.left}>
        <Button
          shape={SHAPE.circle}
          kind={KIND.secondary}
          overrides={{
            Root: {
              style: { display: viewport_width >= 960 ? 'none' : 'block' },
            },
          }}
          onClick={toggleNavMenu}>
          <Menu />
        </Button>

        <NavigationItem>Uber</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />

      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button shape={SHAPE.circle} kind={KIND.secondary}>
            <Bell size={18} />
          </Button>
        </NavigationItem>

        <NavigationItem>
          <Button shape={SHAPE.circle} kind={KIND.secondary}>
            <Mail size={18} />
          </Button>
        </NavigationItem>
      </NavigationList>

      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button shape={SHAPE.circle}>L</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
};
