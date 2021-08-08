import React from 'react';
import Datepicker from 'src/components/DATE_TIME/Datepicker';
import Timezone_Picker from 'src/components/DATE_TIME/Timezone_Picker';
import Time_Picker from 'src/components/DATE_TIME/Time_Picker';

export default function HelloworldTables() {
  return (
    <>
      <Datepicker />
      <Time_Picker />
      <Timezone_Picker />
    </>
  );
}
