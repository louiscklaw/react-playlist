import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to="/about">About</Link>
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
