import React from 'react'

import ShareContextProvider from './context/Share'

import Editor from './Editor'

const saveJson = () => {
  alert('save json')
}

const reloadJson = () => {
  alert('reload json')
}

export default function Backend() {
  return (
    <>
      <ShareContextProvider saveJson={saveJson} reloadJson={reloadJson}>
        <Editor />
      </ShareContextProvider>
    </>
  )
}
