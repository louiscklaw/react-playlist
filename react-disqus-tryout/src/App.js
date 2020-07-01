import React from 'react';
import DisqusTryout from './components/disqus-tryout'

function App() {
  return (
    <div className="App">
      helloworld
      remember to check short name settings
      https://fir-tryout-f4e7a.firebaseapp.com/
      <DisqusTryout
        article={{
          url: 'https://fir-tryout-f4e7a.firebaseapp.com/',
          id:"123321",
          title:"test title"
        }}
      />
    </div>
  );
}

export default App;
