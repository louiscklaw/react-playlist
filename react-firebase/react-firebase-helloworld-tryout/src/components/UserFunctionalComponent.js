import React from 'react';

import db from '../firebase/db';

const UserFunctionalComponent = () => {
  const [get_user_result, setGetUserResult] = React.useState({});
  const [list_user_result, setListUserResult] = React.useState({});
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [listening_result, setListeningResult] = React.useState('');
  const [single_listening_result, setSingleListeningResult] =
    React.useState('');

  const listUser = () => {
    let temp_users = [];
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp_users.push(doc.data());
        });
        return temp_users;
      })
      .then((temp_users) => setListUserResult(temp_users));
  };

  const addUser = (e) => {
    e.preventDefault();

    const userRef = db
      .collection('users')
      .add({ fullname, email })
      .then(() => {
        setFullname('');
        setEmail('');
      });
  };

  const deleteUser = (e) => {
    db.collection('users')
      .doc('A5JOk2uKnwd5LXPKAsoo')
      .delete()
      .then(function () {
        console.log('Document successfully deleted!');
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
  };

  const getUser = () => {
    return db
      .collection('users')
      .doc('A5JOk2uKnwd5LXPKAsoo')
      .get()
      .then((doc) => {
        console.log('doc.data()', doc.data());
        return doc.data();
      })
      .then((doc_data) => setGetUserResult({ fullname: doc_data.fullname }));
  };

  const updateUser = () => {
    return db
      .collection('users')
      .doc('A5JOk2uKnwd5LXPKAsoo')
      .set({ hello: 'world' }, { merge: true });
  };

  React.useEffect(() => {
    db.collection('users').onSnapshot(function (querySnapshot) {
      let temp_users = [];
      querySnapshot.forEach((doc) => {
        temp_users.push(doc.data());
      });
      setListeningResult(temp_users);
    });
  }, []);

  React.useEffect(() => {
    db.collection('users')
      .doc('A5JOk2uKnwd5LXPKAsoo')
      .onSnapshot((doc) => {
        setSingleListeningResult(doc.data());
      });
  }, []);

  return (
    <>
      <a href="http://localhost:4001">firebase console</a>

      <div>listening_result:</div>
      <div>
        <pre>{JSON.stringify(listening_result, null, 2)}</pre>
      </div>

      <div>list_user_result:</div>
      <pre>{JSON.stringify(list_user_result, null, 2)}</pre>
      <div>
        <button onClick={listUser}>list user</button>
      </div>

      <div>Add:</div>
      <form onSubmit={(e) => addUser(e)}>
        <input
          type="text"
          name="fullname"
          placehodler="fullname"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>

      <div>get_user_result:</div>
      <pre>{JSON.stringify(get_user_result, null, 2)}</pre>
      <div>
        <button onClick={getUser}>get user</button>
      </div>

      <div>update:</div>
      <div>
        <button onClick={updateUser}>update user</button>
      </div>

      <div>delete:</div>
      <div>
        <button onClick={deleteUser}>deleteUser</button>
      </div>

      <div>
        <div>single_listening_result:</div>
        <div>{JSON.stringify(single_listening_result)}</div>
      </div>
    </>
  );
};

export default UserFunctionalComponent;
