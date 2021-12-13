import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div>
        <Link to="/login">login page</Link>
      </div>
      <div>
        <Link to="/dashboard">dashboard page</Link>
      </div>
    </>
  );
};
