import React from 'react';
import HelloComponent from 'src/components/HelloComponent';
import HelloComponent2 from 'src/components/HelloComponent2';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

function App({ test_branch = false }) {
  let [is_loading, setIsLoading] = React.useState(true);
  let [is_quitting, setIsQuitting] = React.useState(false);
  let [show_hello_component, setShowHelloComponent] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      alert('quitting App?');
      setIsQuitting(true);
    };
  }, []);

  if (is_loading) return <div>isLoading App</div>;

  return (
    <div className="App">
      <GlobalContextProvider>
        {show_hello_component ? (
          <>
            <HelloComponent />
          </>
        ) : (
          <>
            <HelloComponent2 />
          </>
        )}
        <button
          onClick={() => {
            setShowHelloComponent(!show_hello_component);
          }}>
          toggle
        </button>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
