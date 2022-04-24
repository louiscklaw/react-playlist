class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }

  handleHello() {
    const message = this.createChatbotMessage('Hello. Nice to meet you.')

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  handleDog() {
    const message = this.createChatbotMessage("Here's a nice dog picture for you!", {
      widget: 'dogPicture',
    })

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }
}

export default ActionProvider
