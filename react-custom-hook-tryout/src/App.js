import React from 'react';

function useCustomHookTest(intervals){
  const [isOnline, setIsOnline] = React.useState(null)

  React.useEffect(()=>{
    setInterval(() => {
      setIsOnline(Math.random().toString().substring(2,10))
    }, intervals);
  },[])

  return isOnline
}

function App() {
  // const [ test_variable, setTestVariable ] = React.useState( 'default value' );

  const test_num100 = useCustomHookTest(200)
  const test_num200 = useCustomHookTest(400)
  const test_num300 = useCustomHookTest(600)
  const test_num400 = useCustomHookTest(700)
  const test_num500 = useCustomHookTest(1000)


  return(
    <>
      <div>{test_num100}</div>
      <div>{test_num200}</div>
      <div>{test_num300}</div>
      <div>{test_num400}</div>
      <div>{test_num500}</div>

    </>
  )

}

export default App;
