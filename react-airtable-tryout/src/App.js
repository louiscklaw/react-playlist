import React from 'react';

import AirtableForm from './components/airtable-form';
import AirtableGridView from './components/airtable-gridview';

function App() {
  return (
    <div className="App">
      <div>
        <div>helloworld airtable form</div>
        <div>
          <AirtableForm />
        </div>
      </div>

      <div>
        <div>helloworld gridview</div>
        <div>
          <AirtableGridView />
        </div>
      </div>
    </div>
  );
}

export default App;
