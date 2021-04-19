import React from 'react';
import { Link } from 'react-router-dom';

export default function Page2() {
  return (
    <>
      <div>Page2</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/page1">page1</Link>
      </div>
      <div>
        <Link to="/page3">page3</Link>
      </div>
    </>
  );
}
