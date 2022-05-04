import React from 'react'
import { matchSorter } from 'match-sorter'

function App({ test_branch = false }) {
  const list = ['hi', 'hey', 'hello', 'sup', 'yo']
  console.log(matchSorter(list, 'h')) // ['hello', 'hey', 'hi']
  console.log(matchSorter(list, 'y')) // ['yo', 'hey']
  console.log(matchSorter(list, 'z')) // []

  return <div className="App">hellocomponents</div>
}

export default App
