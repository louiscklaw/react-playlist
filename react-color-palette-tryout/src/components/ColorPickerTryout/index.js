import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'

const App = () => {
  const [color, setColor] = useColor('hex', '#121212')

  return <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV dark />
}

export default App
