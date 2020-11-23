import React from 'react';

var ENV_PUBLIC_URL = process.env.PUBLIC_URL;

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={`${ENV_PUBLIC_URL}/static/logo.svg`}
      {...props}
    />
  );
};

export default Logo;
