import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';

const engine = new Styletron();

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>Hello_YourApp</BaseProvider>
    </StyletronProvider>
  );
}
