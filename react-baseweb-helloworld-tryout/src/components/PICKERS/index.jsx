import React from 'react';
import File_Uploader from 'src/components/PICKERS/File_Uploader';
import Menu from 'src/components/PICKERS/Menu';
import Rating from 'src/components/PICKERS/Rating';
import Select from 'src/components/PICKERS/Select';

export default function HelloworldPickers() {
  return (
    <>
      <File_Uploader />
      <Menu />
      <Rating />
      <Select />
    </>
  );
}
