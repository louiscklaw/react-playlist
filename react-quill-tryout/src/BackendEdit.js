import React from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import './quill-style.css'

function BackendEdit({ value, setValue }) {
  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
  }

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
    </>
  )
}

export default BackendEdit
