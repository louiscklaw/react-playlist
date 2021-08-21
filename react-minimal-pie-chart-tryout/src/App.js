import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';

import { PieChart } from 'react-minimal-pie-chart';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <PieChart
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
        ;
      </GlobalContextProvider>
    </div>
  );
}

export default App;
