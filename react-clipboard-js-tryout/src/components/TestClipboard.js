import React, { Component } from 'react';

import Clipboard from 'react-clipboard.js';

export default class TestClipboard extends Component{
  render(){
    return(
      <>
      <Clipboard
        data-clipboard-text="I'll be copied"
        button-title="I'm a tooltip"
        >
        copy to clipboard
      </Clipboard>

      </>
    )
  }
}