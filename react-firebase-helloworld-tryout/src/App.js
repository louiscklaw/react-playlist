import React from 'react';

// https://firebase.google.com/docs/firestore/quotas
// https://firebase.google.com/docs/firestore/quickstart
// import firebase from 'firebase'
import firestore from './firestore'

import './App.css';

const db = firestore.firestore();

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullname: "",
      getUserResult:{},
      listeningResult: {}
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();

    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email
    });

    this.setState({
      fullname: "",
      email: ""
    });
  };

  getUser = () => {
    var docRef = db.collection("users").doc("A5JOk2uKnwd5LXPKAsoo");

    console.log(this)
    docRef.get().then( doc => doc.data())
      .then( doc_data => this.setState({...this.state, getUserResult: {fullname: doc_data.fullname}}))
  }

  componentDidMount = () => {
    db.collection("users").doc("A5JOk2uKnwd5LXPKAsoo")
    .onSnapshot((doc)=>{
      this.setState({...this.state, listeningResult: {fullname: doc.data().fullname}})
    });


    db.collection("users").where("state", "==", "CA")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });

  }

  deleteUser = () => {
    db.collection("users").doc("A5JOk2uKnwd5LXPKAsoo").delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });


  }

  render(){
    return(
      <>
      <a href="https://console.firebase.google.com/u/0/project/react-tryout-e8aa2/firestore/data~2Fusers~2FA5JOk2uKnwd5LXPKAsoo">firebase console</a>
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
        <button type='submit'>Submit</button>

      </form>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <User />
      helloworld
    </div>
  );
}

export default App;
