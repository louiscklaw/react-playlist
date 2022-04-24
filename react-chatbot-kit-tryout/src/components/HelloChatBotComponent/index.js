import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from 'src/bot/config.js'
import MessageParser from 'src/bot/MessageParser.js'
import ActionProvider from 'src/bot/ActionProvider.js'

const MyComponent = () => {
  return (
    <div>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  )
}

export default MyComponent
