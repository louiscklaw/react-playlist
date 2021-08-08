import React from 'react';
import Accordion from 'src/components/CONTENT/Accordion';
import Avatar from 'src/components/CONTENT/Avatar';
import Drag_and_Drop_List from 'src/components/CONTENT/Drag_and_Drop_List';
import Heading from 'src/components/CONTENT/Heading';
import Icon from 'src/components/CONTENT/Icon';
import ExampleLayoutGrid from 'src/components/CONTENT/Layout_Grid';
import ExampleListArtworkSizes from 'src/components/CONTENT/List';
import Tag from 'src/components/CONTENT/Tag';
import Tree_View from 'src/components/CONTENT/Tree_View';
import ExampleTypography from 'src/components/CONTENT/Typography';

export default function HelloworldContent() {
  return (
    <>
      <Accordion />
      <Avatar />
      <Drag_and_Drop_List />
      <ExampleLayoutGrid />
      <Heading />
      <Icon />
      <ExampleListArtworkSizes />
      <Tag />
      <Tree_View />
      <ExampleTypography />
      <Drag_and_Drop_List />
    </>
  );
}
