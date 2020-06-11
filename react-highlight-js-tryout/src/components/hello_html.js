import React, { Component } from 'react';

import Highlight from 'react-highlight.js';

export default class HelloHtml extends Component{
  render(){
  // https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md
  let language='html';
  let content='<h1>testing helloworld</h1>';

    return(
      <>
        <Highlight language={language}>
          {content}
        </Highlight>
      </>
    )
  }
}