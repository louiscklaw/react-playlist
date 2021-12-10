import React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Cell, BEHAVIOR, ALIGNMENT } from 'baseui/layout-grid';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

import { logo1 } from '../../assets';

const Inner = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.accent700,
        padding: '.25rem',
      })}>
      {children}
    </div>
  );
};

const Outer = ({ children }) => {
  const [css, theme] = useStyletron();
  return <div>{children}</div>;
};

export default ({ children }) => {
  const [value, setValue] = React.useState('Hello');

  return (
    <>
      <Outer>
        <Grid behavior={BEHAVIOR.fluid}>
          <Cell span={12}>
            <Inner>
              <div
                style={{
                  backgroundImage: `url(${logo1})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  height: '200px',
                  width: '200px',
                }}
              />
            </Inner>
          </Cell>
        </Grid>
        <Grid
          gridColumns={12}
          gridGaps={[2, 6, 12]}
          gridGutters={[2, 6, 12]}
          gridMargins={[8, 16, 32]}
          gridMaxWidth={1440}>
          <Cell span={[12, 4]}>
            <Inner>facebook</Inner>
          </Cell>
          <Cell span={[12, 4]}>
            <Inner>google</Inner>
          </Cell>
          <Cell span={[12, 4]}>
            <Inner>apple</Inner>
          </Cell>
        </Grid>
        <Grid
          gridColumns={12}
          gridGaps={[2, 6, 12]}
          gridGutters={[2, 6, 12]}
          gridMargins={[8, 16, 32]}
          gridMaxWidth={1440}>
          <Cell span={[12, 4]}>
            <Inner>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Controlled Input"
                clearOnEscape
                startEnhancer={() => {
                  return <>helloworld</>;
                }}
              />
            </Inner>
          </Cell>
          <Cell span={[12, 4]}>
            <Inner>
              <Input
                onChange={(event) => setValue(event.currentTarget.value)}
                type="password"
                value={value}
              />
            </Inner>
          </Cell>
        </Grid>
        <Grid
          gridColumns={12}
          gridGaps={[2, 6, 12]}
          gridGutters={[2, 6, 12]}
          gridMargins={[8, 16, 32]}
          gridMaxWidth={1440}>
          <Cell span={[12, 4]}>
            <Inner>
              <Button>Login</Button>
            </Inner>
          </Cell>
        </Grid>
      </Outer>
    </>
  );
};
