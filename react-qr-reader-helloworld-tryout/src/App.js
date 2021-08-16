import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import QrReader from 'react-qr-reader';

function App({ test_branch = false }) {
  const [result, setResult] = React.useState({ result: 'No result' });
  const handleScan = (data) => {
    if (data) {
      setResult({ result: data });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{JSON.stringify(result, null, 2)}</p>
    </div>
  );
}

export default App;
