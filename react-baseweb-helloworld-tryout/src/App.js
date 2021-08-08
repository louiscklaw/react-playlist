import React from 'react';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

import ExampleButton from 'src/components/ExampleButton';
import ExampleOKButton from 'src/components/ExampleOKButton';
import ExampleStarRating from 'src/components/ExampleStarRating';
import ExampleEmoticonsRating from 'src/components/ExampleEmoticonsRating';
import ExampleProgressSteps from 'src/components/ExampleProgressSteps';
import ExampleNumberedProgressSteps from 'src/components/ExampleNumberedProgressSteps';
import ExampleProgressStepsDottedUsage from 'src/components/ExampleProgressStepsDottedUsage';
import ExampleSnackbar from 'src/components/ExampleSnackbar';
import ExampleDrawer from 'src/components/ExampleDrawer';
import ExamplePopover from 'src/components/ExamplePopover';

import { theme } from 'src/themes/index';
import HelloworldInput from 'src/components/INPUTS';
import HelloworldNavigation from 'src/components/NAVIGATION';
import HelloworldPickers from 'src/components/PICKERS';
import HelloworldProgressValidation from 'src/components/PROGRESS_VALIDATION';
import HelloworldSurfaces from 'src/components/SURFACES';
import HelloworldTables from 'src/components/TABLES';
import HelloworldContent from 'src/components/CONTENT';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <div className="App">
      Home_en
      <div style={{ height: '100%', width: '100%' }}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme}>
            <HelloworldInput />
            <HelloworldNavigation />
            <HelloworldPickers />
            <HelloworldProgressValidation />
            <HelloworldSurfaces />
            <HelloworldTables />
            <HelloworldContent />

            <Centered>
              <div style={{ margin: '3rem' }}>
                <StatefulInput placeholder="StatefulInput" />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleButton />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleOKButton />
              </div>
            </Centered>
            <Centered>
              <div style={{ margin: '3rem' }}>
                <ExampleStarRating />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleEmoticonsRating />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleProgressSteps />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleNumberedProgressSteps />
              </div>

              <div style={{ margin: '3rem' }}>
                <ExampleProgressStepsDottedUsage />
              </div>
            </Centered>
            <Centered>
              <div style={{ margin: '3rem' }}>
                <ExampleSnackbar />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExampleDrawer />
              </div>
              <div style={{ margin: '3rem' }}>
                <ExamplePopover />
              </div>
            </Centered>
          </BaseProvider>
        </StyletronProvider>
      </div>
    </div>
  );
}

export default App;
