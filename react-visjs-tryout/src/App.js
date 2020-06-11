import React from 'react';
import './App.css';

import Viz from 'viz.js';
import HTMLReactParser from 'react-html-parser';
import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'dompurify';

const graph = Viz("digraph { a -> b;c; d -> c; a -> d; }", { format: "svg", scale: 2, engine: 'dot' });

function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(graph)}}/>
      <div>{HTMLReactParser(Viz("digraph { ac -> b; }", { format: "svg", scale: 2 }))}</div>
      <p> Start editing to see some magic happen :) </p>
    </div>
  );
}

export default App;
