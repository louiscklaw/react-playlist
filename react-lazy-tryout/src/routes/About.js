import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div>About</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/page1">page1</Link>
      </div>
      <div>
        <Link to="/page2">page2</Link>
      </div>
      <div>
        <Link to="/page3">page3</Link>
      </div>
    </>
  );
}
