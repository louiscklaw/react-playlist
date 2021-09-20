import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import Avatar from 'boring-avatars';

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
        <Avatar
          size={40}
          name="logickee"
          variant="marble"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />

        <Avatar
          size={20}
          name="logickee"
          variant="beam"
          colors={['#F0AB3D', '#C20D90', '#92A1C6', '#C271B4', '#146A7C']}
        />

        <Avatar
          size={40}
          name="logickee"
          variant="beam"
          colors={['#F0AB3D', '#C20D90', '#92A1C6', '#C271B4', '#146A7C']}
        />

        <Avatar
          size={60}
          name="logickee"
          variant="beam"
          colors={['#F0AB3D', '#C20D90', '#92A1C6', '#C271B4', '#146A7C']}
        />

        <Avatar
          size={80}
          name="logickee"
          variant="beam"
          colors={['#F0AB3D', '#C20D90', '#92A1C6', '#C271B4', '#146A7C']}
        />

        <Avatar
          size={100}
          name="logickee"
          variant="beam"
          colors={['#F0AB3D', '#C20D90', '#92A1C6', '#C271B4', '#146A7C']}
        />

        <Avatar
          size={40}
          name="logickee"
          variant="pixel"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />

        <Avatar
          size={40}
          name="logickee"
          variant="sunset"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />

        <Avatar
          size={40}
          name="logickee"
          variant="ring"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />

        <Avatar
          size={40}
          name="logickee"
          variant="bauhaus"
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
