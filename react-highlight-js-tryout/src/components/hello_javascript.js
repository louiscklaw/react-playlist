import React, { Component } from 'react';

import Highlight from 'react-highlight.js';

export default class HelloJavascript extends Component{
  render(){
  // https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md
  let language='js';
  let content='console.log("helloworld")';

    return(
      <>
        <Highlight language={language}>
          {content}
        </Highlight>
      </>
    )
  }
}