import React, { forwardRef } from 'react';

import FlipMove from 'react-flip-move';

import './App.css';

let articles = [ {
    id: 1,
    hello: 'world1'
  },
  {
    id: 2,
    hello: 'world2'
  },
  {
    id: 3,
    hello: 'world3'
  },
  {
    id: 4,
    hello: 'world4'
  },
  {
    id: 5,
    hello: 'world5'
  }
]


const FunctionalArticle = forwardRef((props, ref) => (
  <div ref={ref}>
    {props.test_id}
  </div>
));


const TopArticles = ({ articles }) => (
  <FlipMove>
    {articles.map(article => (
      <FunctionalArticle key={article.id} test_id={article.id} />
    ))}
  </FlipMove>
);


function App() {
  return (
    <div className="App">
      helloworld
      <TopArticles articles={articles} />
      helloanotherworld

    </div>
  );
}

export default App;
