import React from 'react'
import DropzoneComponent from 'react-dropzone-component'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'image/jpeg,image/png,image/gif',
      autoProcessQueue: false,
    }

    this.componentConfig = {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: 'no-url',
    }
  }

  handleFileAdded(file) {
    console.log(file)
  }

  render() {
    const config = this.componentConfig
    const djsConfig = this.djsConfig

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      addedfile: this.handleFileAdded.bind(this),
    }

    return (
      <div style={{ itemAlign: 'center', textAlign: 'center', padding: '3em' }}>

        <div style={{
          width: '100px',
          height: '100px',
          textAlign: 'center',
          padding: '5px',
          backgroundColor: '#E1E1E1',
          borderRadius: '5px',
          minHeight: '60px',
          border: '2px dashed #C7C7C7',
          width: '80%',
        }}>
          <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
        </div>
      </div>
    )
  }
}