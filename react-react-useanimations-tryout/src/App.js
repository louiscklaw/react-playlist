import React,{useState} from 'react'

// https://useanimations.github.io/react-useanimations/?path=/story/animations--all
import UseAnimations from 'react-useanimations'

import github from 'react-useanimations/lib/github'
import radioButton from 'react-useanimations/lib/radioButton'


import './App.css';

function App() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="App">
      helloworld

      <h3>Basic usage</h3>
      <UseAnimations animation={github} />

      <UseAnimations animation={github} size={56} wrapperStyle={{ padding: 100 }} />

      <h3>Controlled checkbox example</h3>
      <div style={{ padding: '20px' }}>
        <span>radioButton</span>
        <UseAnimations
          reverse={checked}
          onClick={() => {
            setChecked(!checked);
          }}
          size={40}
          wrapperStyle={{ marginTop: '5px' }}
          animation={radioButton}
        />
      </div>

    </div>
  );
}

export default App;
