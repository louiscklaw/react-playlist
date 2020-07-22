import React from 'react'

import FirebaseContext from './firebase-context'

import "firebase/firestore"

let default_value = {
  helloStorage:()=>{}
}

let StorageContext = React.createContext(default_value)

function StorageContextProvider(props){
  let {fb_storage} = React.useContext(FirebaseContext)

  const helloStorage = () =>{
    console.log('storage-context.js','helloStorage')
  }

  return(
    <StorageContext.Provider value={{
      helloStorage
    }}>
      {props.children}
    </StorageContext.Provider>
  )
}

export default StorageContext
export { StorageContextProvider }
