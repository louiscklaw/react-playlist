import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link> |
      </nav>
    </div>
  );
}
