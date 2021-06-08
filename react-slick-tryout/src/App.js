import React from 'react';

import Backend from './Backend';
import Frontend from './Frontend';
import ShareContextProvider from './Backend/context/Share.js';

function App() {
  return (
    <>
      <ShareContextProvider>
        <div
          className="container"
          style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="row">
            <div
              className={'col-xs-12 col-xl-6'}
              style={{ height: '500px', width: '100vw' }}
            >
              <div>Frontend</div>
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: 'gold',
                }}
              >
                <Frontend />
              </div>
            </div>
            <div
              className={'col-xs-12  col-xl-6'}
              style={{ height: '50vh', width: '100vw' }}
            >
              <div>Backend</div>
              <div>
                <Backend />
              </div>
            </div>
          </div>
        </div>
      </ShareContextProvider>
    </>
  );
}

export default App;
