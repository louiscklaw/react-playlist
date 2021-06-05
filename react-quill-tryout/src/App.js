import React from 'react'

import BackendEdit from './BackendEdit'
import FrontDisplay from './FrontDisplay'

const test_data = `<h2>宮廷雞系列</h2><p><br></p><p>採用我們多年研發配種己成的獨有的雞種.再由我們自設雞場天然飼養90天，</p><p>雞肉幼滑，雞味濃厚。每款宮廷雞餐品上都配上不同的秘製醬汁，</p><p>是我們各分店最熱賣的餐點。</p><p><br></p><p><strong><u>餐品包括:無骨海南雞飯</u></strong></p><p><br></p><p>宮廷雞除了飯類餐品之外，我們亦給客人多一個麵食配搭的選擇，</p><p>粉麵湯底每天用大量雞骨熬製十小時而成，麵食餐品不單止有我們著名的宮廷貴雞作主料，</p><p>還有其它港人喜愛的食材配料例如:雲吞、墨丸、扎肉等。而粉麵選擇客人可選米粉、河粉或手打麵。</p><p><br></p>`

function App() {
  const [value, setValue] = React.useState(test_data)

  return (
    <div className="App">
      <div
        style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', alignItems: 'center' }}
      >
        <div style={{ height: '100vh', width: '50vw' }}>
          <div>frontend</div>
          <div>
            <FrontDisplay value={value} setValue={setValue} />
          </div>
        </div>
        <div style={{ height: '100vh', width: '50vw' }}>
          <div>backend</div>
          <div>
            <BackendEdit value={value} setValue={setValue} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
