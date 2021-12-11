import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Login from './layouts/Login';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className={styles.App}>
      {/* 
      <header className={styles.helloworld}>
        <p>helloworld</p>
      </header> 
      */}
      <Login />
    </div>
  );
}

export default App;
