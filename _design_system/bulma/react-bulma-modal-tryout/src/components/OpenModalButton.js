import React from 'react'

// import { ThemeContext } from '../contexts/ThemeContexts'
import {ModalContext} from '../contexts/Modals'

function OpenModalButton(props){
  let {openSettingModal} = React.useContext(ModalContext)

  const openModal = () =>{
    openSettingModal()
  }

  return(
    <>
      <button onClick={openModal} className="button">OpenModal</button>
    </>
  )
}

export default OpenModalButton