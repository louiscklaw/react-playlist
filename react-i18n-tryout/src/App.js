import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import { Outlet } from 'react-router';

import { useTranslation } from 'react-i18next';

import Home from 'src/Home';
import About from 'src/About';
import Users from 'src/Users';

import 'src/lang';
import { LangContextProvider } from 'src/contexts/LangContext';

const ActiveLang = () => {
  return <Outlet />;
};

export default function App() {
  return (
    <BrowserRouter>
      <LangContextProvider>
        <div>
          <nav>
            <div>
              <ul>
                <li>
                  <Link to="/en/">Home_en</Link>
                </li>
                <li>
                  <Link to="/en/about">About_en</Link>
                </li>
                <li>
                  <Link to="/en/users">Users_en</Link>
                </li>
                <li>
                  <Link to="/zh/">Home_zh</Link>
                </li>
                <li>
                  <Link to="/zh/about">About_zh</Link>
                </li>
                <li>
                  <Link to="/zh/users">Users_zh</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/:lang" element={<ActiveLang />}>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Route>
          </Routes>
        </div>
      </LangContextProvider>
    </BrowserRouter>
  );
}
