import React from 'react';

import styles2 from './test2.module.css';
import styles1 from './test1.module.css';


class App extends React.Component {
  render(){
    console.log(styles2)
    return (
      <div className={styles2.ttt} >
        helloworld
        <h3> hello h3 </h3>
      </div>
    );
  }
}

export default App;
