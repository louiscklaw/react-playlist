import React , { createContext } from 'react'

export const ModalContext = createContext();

function ModalContextProvider(props){
  let [hello, setHello] = React.useState('world')
  let [setting_modal_class, setSettingModalClass] = React.useState('modal')

  const sayHello = () => {
    console.log('say hello')
  }

  const openSettingModal = () =>{
    setSettingModalClass('modal is-active')
  }

  const closeSettingModal = () => {
    setSettingModalClass('modal')
  }

  return(
    <ModalContext.Provider value={{
      hello, setHello,
      sayHello,
      openSettingModal, closeSettingModal
      }}>
      <div class={setting_modal_class}>
        <div class="modal-background"></div>
        <div class="modal-content">
          hello modal
        </div>
        <button class="modal-close is-large" aria-label="close" onClick={closeSettingModal}></button>
      </div>
      { props.children }
    </ModalContext.Provider>
  )
}


export default ModalContextProvider;