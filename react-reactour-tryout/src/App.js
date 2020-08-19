import React from 'react'
import Tour from 'reactour'

import './App.css';

const steps = [
  {
    selector: '.first-step',
    content: 'This is my first Step',
  },
]


function App() {
  let [TourOpen, setTourOpen] = React.useState(true)
  const closeTour = () =>{
    console.log('closeTour')
    setTourOpen(false)
  }

  return (
    <div className="App">
      helloworld
      <Tour
        steps={steps}
        isOpen={TourOpen}
        onRequestClose={closeTour} />
    </div>
  );
}

export default App;
