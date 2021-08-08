import React from 'react';
import ExamplePopover from 'src/components/ExamplePopover';
import Card from 'src/components/SURFACES/Card';
import Drawer from 'src/components/SURFACES/Drawer';
import Modal from 'src/components/SURFACES/Modal';
import Tooltip from 'src/components/SURFACES/Tooltip';

export default function HelloworldSurfaces() {
  return (
    <>
      <Card />
      <Drawer />
      <Modal />
      <ExamplePopover />
      <Tooltip />
    </>
  );
}
