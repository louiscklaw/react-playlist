import React from 'react';

import ContentLoader, {
  Facebook,
  Instagram,
  Code,
  List,
  BulletList,
} from 'react-content-loader';

import { GlobalContextProvider } from 'src/contexts/GlobalContext';

const CustomLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

function App({ test_branch = false }) {
  let helloEmpty;

  if (test_branch) {
    console.log('find true');
  } else {
    console.log('find false');
  }

  console.log('helloEmpty', helloEmpty);

  return (
    <div className="App">
      <GlobalContextProvider>
        {JSON.stringify(helloEmpty, null, 2)}

        <div style={{ width: '200px' }}>
          <div>
            facebook
            <Facebook />
          </div>
          <div>
            Instagram
            <Instagram />
          </div>

          <div>
            Code,
            <Code />
          </div>
          <div>
            List,
            <List />
          </div>
          <div>
            BulletList,
            <BulletList />
          </div>
          <div>
            CustomLoader
            <CustomLoader />
          </div>
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
