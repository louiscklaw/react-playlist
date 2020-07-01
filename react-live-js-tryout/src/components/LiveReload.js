import React, { Component } from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

export default class LiveReload extends Component{
  render(){
    return(
      <LiveProvider code="<strong>Hello World!</strong>">
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
}