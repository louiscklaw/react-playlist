import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
