import React from 'react';
import firebase from 'firebase';

import db from '../firebase/db';

export default function ExampleComponent() {
  React.useEffect(() => {
    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('helloworld.jpg');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('images/helloworld.jpg');

    var bytes = new Uint8Array([
      0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64,
      0x21,
    ]);

    mountainImagesRef.put(bytes).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }, []);

  return <>ExampleComponent</>;
}
