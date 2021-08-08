import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
        <Link to="/meny/wF5SRAl2k5G1SD7GiRda/wF5SRAl2k5G1SD7GiRda/NewUserlineup">
          TestComponent
        </Link>
      </nav>
    </div>
  );
}
