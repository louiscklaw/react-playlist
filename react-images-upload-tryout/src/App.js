import React from "react";
import ImageUploader from "react-images-upload";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.performUpload = this.performUpload.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles,
    });
    console.log(this.state);
  }

  performUpload() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <button onClick={this.performUpload}>upload</button>
      </>
    );
  }
}

export default App;
