import React from 'react';

// https://firebase.google.com/docs/firestore/quotas
// https://firebase.google.com/docs/firestore/quickstart
// import firebase from 'firebase'
import firebase from 'firebase'
import firestore from './firestore'

import './App.css';

const storage = firestore.storage();
let storageRef = storage.ref();

var imagesRef = storageRef.child('images');
var spaceRef = storageRef.child('images/space.jpg');

var mountainsRef = storageRef.child('mountains.jpg');
var mountainImagesRef = storageRef.child('images/mountains.jpg');


const testUpload = () => {
  const obj = {hello: 'world'};
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

  var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
  mountainsRef.put(bytes).then(function(snapshot) {
    console.log('Uploaded an array!');
  });

}
const testUploadWithMonitoring = () => {
  const obj = {hello: 'world'};
  var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);

  var uploadTask = storageRef.child('images/rivers.jpg').put(bytes);
  uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    switch (error.code){
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;
      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }

  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  });


}

class StorageAPITryout extends React.Component {


  render(){
    return(
      <>
        <button onClick={testUpload}>testUpload</button>
        <button onClick={testUploadWithMonitoring}>testUploadWithMonitoring</button>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <StorageAPITryout />
      helloworld
    </div>
  );
}

export default App;
