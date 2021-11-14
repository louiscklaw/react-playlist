export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
      ).then(() => {
          dispatch({ type: 'LOGIN_SUCCESS' })
      }).catch((err) => {
          dispatch({ type: 'LOGIN_ERROR', err })
      })
  }
}

export const signOut = () =>{
return(dispatch, getState, {getFirebase}) => {
  // console.log('calling action signout')

  const firebase = getFirebase();
  firebase.auth().signOut().then( () => {
    dispatch({type: 'SIGNOUT_SUCCESS'})
  });
}
}

export const signUp = (newUser) => {
return (dispatch, getState, {getFirebase, getFirestore}) => {
  // for auth
  const firebase = getFirebase()
  const firestore = getFirestore()

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password
  ).then((resp) => {
    console.log(resp)
    return firestore.collection('users').doc(resp.user.uid).set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      initials: newUser.firstName[0]+newUser.lastName[0]
    })
  }).then(() => {
    console.log('signup_success')
    dispatch({ type: 'SIGNUP_SUCCESS' })
  }).catch((err) => {
    console.log('signup_error')
    dispatch({type: 'SIGNUP_ERROR', err })
  })

}
}