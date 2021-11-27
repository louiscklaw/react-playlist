import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin'
import MarkdownEditor from 'material-ui-markdown-editor'
// import 'codemirror/lib/codemirror.css' // import codemirror styles
// import './test.css' // import override styles

// injectTapEventPlugin()

const Example = () => (
  <MuiThemeProvider>
    <MarkdownEditor
      title="Foo"
      code="# Fancy markdown editor!"
    />
  </MuiThemeProvider>
)

export default Example