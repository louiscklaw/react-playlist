import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <>
      <div>Page1</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
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
