import ChatBot from 'react-simple-chatbot'
import './ChatBox.css'

function ChatBox() {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'You can add custom components',
          trigger: '2',
        },
        {
          id: '2',
          component: <div> This is an example component </div>,
          end: true,
        },
      ]}
    />
  )
}

export default ChatBox
