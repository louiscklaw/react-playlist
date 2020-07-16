import React from 'react'

import './App.css'

import HtmlToReact from  'html-to-react'

import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'

function App(props){
  const markdown = `
# This is a header

And this is a paragraph **bold**

This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.

helloworld

<custom test="test_props">
hello code
</custom>
`
  let processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
  let processingInstructions = [
    {
      shouldProcessNode: function (node) {
        return node.parent && node.parent.name && node.parent.name === 'custom';
      },
      processNode: function (node, children) {
        console.log(node)
        return (
          <pre>
            {node.data.toUpperCase()}
          </pre>
        );
      }
    },
    {
        // Anything else
        shouldProcessNode: function (node) {
          return true;
        },
        processNode: processNodeDefinitions.processDefaultNode
    }
  ];

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions
  })

  return(
    <>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        astPlugins={[parseHtml]}
      />
    </>
  )
}

export default App
