import React from 'react';
import firestore from './firestore';

// https://firebase.google.com/docs/firestore/quotas
// https://firebase.google.com/docs/firestore/quickstart

const db = firestore.firestore();
db.settings({
  timestampsInSnapshots: true,
});

export default function User() {
  const getUser = () => {
    var docRef = db.collection('users').doc('test_user_doc');

    console.log(this);
    docRef
      .get()
      .then((doc) => doc.data())
      .then((doc_data) => this.setState({ ...this.state, getUserResult: { fullname: doc_data.fullname } }));
  };

  const addUser = (e) => {
    db.collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const listUser = () => {
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        let output = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          output.push(doc.data());
        });
        console.log('output', output);
      });
  };

  const deleteUser = () => {
    db.collection('users')
      .doc('test_user_doc')
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };

  return (
    <>
      <div>
        <div>getUser</div>
        <button onClick={getUser}>getUser</button>
      </div>
      <div>
        <div>addUser</div>
        <button onClick={addUser}>addUser</button>
      </div>
      <div>
        <div>listUser</div>
        <button onClick={listUser}>listUser</button>
      </div>

      <div>
        <div>deleteUser</div>
        <button onClick={deleteUser}>deleteUser</button>
      </div>
    </>
  );
}
