import ChatBot from 'react-simple-chatbot'
import './ChatBox.css'

function ChatBox() {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Please type a number',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          validator: value => {
            if (isNaN(value)) {
              return 'value should be a number'
            }
            return true
          },
          trigger: '1',
        },
      ]}
    />
  )
}

export default ChatBox
