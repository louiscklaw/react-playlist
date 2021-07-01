import React, { useState, useEffect } from 'react';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import Example from './components/Example';

import logo from './logo.svg';
import './App.css';

const queryClient = new QueryClient();

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Example />
      </div>
    </QueryClientProvider>
  );
}

export default App;
