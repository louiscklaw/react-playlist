import React from 'react';
import TestBox from './components/test-box';

function App() {
  let [t_id_array, setTIdArray] = React.useState(['id_1','id_2','id_3'])

  const change_all_value = (e) => {
    console.log(e.target.parentNode.id)
    let this_id = e.target.parentNode.id

    t_id_array.forEach(t_ref_id => {
      if (t_ref_id == this_id){

      }else{
        document.querySelector(`#${t_ref_id}`).style.visibility='hidden'
      }
    })

  }

  return (
    <div className="App">
      <TestBox my_id='id_1' pressButton={change_all_value} />
      <TestBox my_id='id_2' pressButton={change_all_value} />
      <TestBox my_id='id_3' pressButton={change_all_value} />
    </div>
  );
}

export default App;
