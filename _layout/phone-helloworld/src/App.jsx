import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import LoadingTest from './pages/LoadingTest';
import Home from './pages/Home';

import './App.css';
import { logo1 } from './assets';

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="loading_test" element={<LoadingTest />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
