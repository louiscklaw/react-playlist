import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import FullScreenLayout from '../layouts/FullScreenLayout';
import AppContext from '../contexts/AppContext';

import Login from '../pages/Login';
import PageIndex from '../pages/PageIndex';

export default () => {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route element={<FullScreenLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<PageIndex />} />
              <Route path="*" element={<PageIndex />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
};
