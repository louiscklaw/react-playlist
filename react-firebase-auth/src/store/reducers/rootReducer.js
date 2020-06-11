import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// for firebase auth
import { firebaseReducer } from 'react-redux-firebase'

// a pre-made reducer for firestore
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

// state
export default rootReducer