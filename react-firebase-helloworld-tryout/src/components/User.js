import React from 'react';

import db from '../firebase/db';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      fullname: '',
      getUserResult: {},
      listeningResult: {},
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();

    const userRef = db
      .collection('users')
      .add({ fullname: 'blablabla', email: '123@321.com' })
      .then(() => {
        this.setState({
          fullname: '',
          email: '',
        });
      });
  };

  getUser = () => {
    return db
      .collection('users')
      .doc('A5JOk2uKnwd5LXPKAsoo')
      .get()
      .then((doc) => {
        console.log('doc.data()', doc.data());
        return doc.data();
      })
      .then((doc_data) =>
        this.setState({
          ...this.state,
          getUserResult: { fullname: doc_data.fullname },
        })
      );
  };

  componentDidMount = () => {
    // db.collection('users')
    //   .doc('A5JOk2uKnwd5LXPKAsoo')
    //   .onSnapshot((doc) => {
    //     this.setState({
    //       ...this.state,
    //       listeningResult: { fullname: doc.data().fullname },
    //     });
    //   });
    // db.collection('users')
    //   .where('state', '==', 'CA')
    //   .onSnapshot(function (querySnapshot) {
    //     var cities = [];
    //     querySnapshot.forEach(function (doc) {
    //       cities.push(doc.data().name);
    //     });
    //     console.log('Current cities in CA: ', cities.join(', '));
    //   });
  };

  deleteUser = () => {
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

  render() {
    return (
      <>
        <a href="http://localhost:4000/firestore/data/users/A5JOk2uKnwd5LXPKAsoo">
          firebase console
        </a>
        <div>
          <button onClick={this.getUser}>list user</button>
        </div>

        <div>
          listing
          <div>{JSON.stringify(this.state.getUserResult)}</div>
        </div>

        <div>
          listening
          <div>{JSON.stringify(this.state.listeningResult)}</div>
        </div>

        <div>
          delete user
          <button onClick={this.deleteUser}>delete user</button>
        </div>

        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placehodler="fullname"
            onChange={this.updateInput}
            value={this.state.fullname}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default User;
