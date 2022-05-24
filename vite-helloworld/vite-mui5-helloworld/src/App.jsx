import Button from '@mui/material/Button'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  )
}

export default App
