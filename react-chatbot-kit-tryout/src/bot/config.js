import { createChatBotMessage } from 'react-chatbot-kit'
import DogPicture from 'src/components/DogPicture'

const botName = 'ExcitementBot'

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  // botName: botName,
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#376B7E',
  //   },
  //   chatButton: {
  //     backgroundColor: '#5ccc9d',
  //   },
  // },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: props => <DogPicture {...props} />,
    },
  ],
}

export default config
