import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import { Button } from '@douyinfe/semi-ui';

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>
        <div className="btn-margin-right">
          <Button>主要按钮</Button>
          <Button type="secondary">次要按钮</Button>
          <Button type="tertiary">第三按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
        </div>

        <div>
          <Button theme="solid" type="primary" style={{ marginRight: 8 }}>
            深色主要
          </Button>
          <Button theme="solid" type="secondary" style={{ marginRight: 8 }}>
            深色次要
          </Button>
          <Button theme="solid" type="tertiary" style={{ marginRight: 8 }}>
            深色第三
          </Button>
          <Button theme="solid" type="warning" style={{ marginRight: 8 }}>
            深色警告
          </Button>
          <Button theme="solid" type="danger" style={{ marginRight: 8 }}>
            深色危险
          </Button>
        </div>

        <div>
          <Button theme="borderless" type="primary" style={{ marginRight: 8 }}>
            主要
          </Button>
          <Button
            theme="borderless"
            type="secondary"
            style={{ marginRight: 8 }}>
            次要
          </Button>
          <Button theme="borderless" type="tertiary" style={{ marginRight: 8 }}>
            第三
          </Button>
          <Button theme="borderless" type="warning" style={{ marginRight: 8 }}>
            警告
          </Button>
          <Button theme="borderless" type="danger" style={{ marginRight: 8 }}>
            危险
          </Button>
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
