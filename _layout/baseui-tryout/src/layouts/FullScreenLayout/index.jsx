import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Outlet />
    </div>
  );
}

export default App;
