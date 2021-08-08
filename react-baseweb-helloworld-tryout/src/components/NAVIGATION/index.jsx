import React from 'react';
import Breadcrumbs from 'src/components/NAVIGATION/Breadcrumbs';
import Header_Navigation from 'src/components/NAVIGATION/Header_Navigation';
import Link from 'src/components/NAVIGATION/Link';
import Navigation_Bar from 'src/components/NAVIGATION/Navigation_Bar';
import Pagination from 'src/components/NAVIGATION/Pagination';
import Side_Navigation from 'src/components/NAVIGATION/Side_Navigation';
import Tabs from 'src/components/NAVIGATION/Tabs';
import Tabs_Motion from 'src/components/NAVIGATION/Tabs_Motion';

export default function HelloworldNavigation() {
  return (
    <>
      <Breadcrumbs />
      <Navigation_Bar />
      <Header_Navigation />
      <Link />
      <Pagination />
      <Side_Navigation />
      <Tabs />
      <Tabs_Motion />
    </>
  );
}
