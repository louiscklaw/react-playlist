import React from 'react';
// import HelloComponent from 'src/components/HelloComponent';
import { GlobalContextProvider } from 'src/contexts/GlobalContext';
import SimpleExampleAnExpandingDiv from './components/SimpleExampleAnExpandingDiv';
import SimpleExampleTwoDivs from './components/SimpleExampleTwoDivs';
import SimpleExampleListShuffle from './components/SimpleExampleListShuffle';
import ListTransitions from './components/ListTransitions';
import StaggerEffects from './components/StaggerEffects';
import SpringCustomizations from './components/SpringCustomizations';
import FlipTryout from './components/FlipTryout';

function App({ test_branch = false }) {
  return (
    <div className="App">
      <GlobalContextProvider>
        <h3>FlipTryout</h3>
        <FlipTryout />

        <h3>SpringCustomizations</h3>
        <SpringCustomizations />

        <h3>StaggerEffects</h3>
        <StaggerEffects />

        <h3>ListTransitions</h3>
        <ListTransitions />

        <h3>SimpleExampleAnExpandingDiv</h3>
        <SimpleExampleAnExpandingDiv />

        <h3>SimpleExampleTwoDivs</h3>
        <SimpleExampleTwoDivs />

        <h3>SimpleExampleListShuffle</h3>
        <SimpleExampleListShuffle />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
