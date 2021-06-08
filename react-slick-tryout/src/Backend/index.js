import React from 'react';

import Editor from './Editor';
import Settings from './Settings';

export default function Backend() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={'col-xs-12 col-lg-6'}>
            <Editor />
          </div>
          <div className={'col-xs-12 col-lg-6'}>
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
}
