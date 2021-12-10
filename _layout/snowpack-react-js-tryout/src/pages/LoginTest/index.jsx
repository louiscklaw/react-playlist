import React, { useContext } from 'react';
import { useStyletron } from 'baseui';
import { Grid, Cell, BEHAVIOR, ALIGNMENT } from 'baseui/layout-grid';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

import { Button, SHAPE } from 'baseui/button';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';

import { User, Key, Facebook, GitHub, Chrome } from 'react-feather';

import { logo1 } from '../../assets';
import { BusContext } from '../../contexts/BusContext';
import ShowDebug from '../../components/ShowDebug';

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

const div = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
        width: '100vw',
      }}>
      {children}
    </div>
  );
};

const FacebookButton = () => {
  const [css] = useStyletron();

  const { device_type } = useContext(BusContext);

  if (device_type === 'tablet')
    return (
      <Button onClick={() => alert('click')} shape={SHAPE.pill}>
        <Facebook /> facebook
      </Button>
    );

  return (
    <Button onClick={() => alert('click')} shape={SHAPE.circle}>
      <Facebook />
    </Button>
  );
};

const GitHubButton = () => {
  const [css] = useStyletron();

  const { device_type } = useContext(BusContext);

  if (device_type === 'tablet')
    return (
      <Button onClick={() => alert('click')} shape={SHAPE.pill}>
        <GitHub /> GitHub
      </Button>
    );

  return (
    <Button onClick={() => alert('click')} shape={SHAPE.circle}>
      <GitHub />
    </Button>
  );
};

const ChromeButton = () => {
  const [css] = useStyletron();

  const { device_type } = useContext(BusContext);

  if (device_type === 'tablet')
    return (
      <Button onClick={() => alert('click')} shape={SHAPE.pill}>
        <Chrome /> Chrome
      </Button>
    );

  return (
    <Button onClick={() => alert('click')} shape={SHAPE.circle}>
      <Chrome />
    </Button>
  );
};

export default () => {
  const [css, theme] = useStyletron();

  const [value, setValue] = React.useState('username');
  let { device_type } = useContext(BusContext);

  const restaurant_image = css({
    height: '100%',

    margin: '0',
    padding: '0',

    backgroundImage:
      device_type === 'mobile'
        ? `url(${logo1})`
        : `url(https://source.unsplash.com/1600x900/?japan,restaurant)`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  const restaurant_logo = css({
    display: device_type === 'mobile' ? 'block' : 'none',
    backgroundImage: `url(${logo1})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: '200px',
    width: '200px',
  });

  const bottom_restaurant_logo = css({
    display: device_type === 'mobile' ? 'none' : 'none',
    backgroundImage: `url(${logo1})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    height: '150px',
    width: '150px',
  });

  const spacer = css({
    height: device_type === 'mobile' ? '1rem' : '5rem',
  });

  const copyright = css({
    height: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const top_spacer = css({
    height: device_type === 'mobile' ? '3rem' : '0rem',
  });
  const bottom_spacer = css({
    height: device_type === 'mobile' ? '1rem' : '3rem',
  });

  const test = css({});

  return (
    <>
      <ShowDebug>{JSON.stringify(device_type, null, 2)}</ShowDebug>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}>
        <div
          style={{
            height: '100%',
            width: '100%',

            display: 'flex',
            flexFlow: 'column',
          }}>
          <div className={top_spacer} />
          <div style={{ height: '33vh' }}>
            <div className={restaurant_image}></div>
          </div>

          <div style={{ flexGrow: '1' }}>
            <Block paddingTop="1rem"></Block>

            <div className={spacer} />
            <Grid
              gridColumns={12}
              gridGaps={[2, 6, 12]}
              gridGutters={[2, 6, 12]}
              gridMargins={[8, 16, 32]}
              gridMaxWidth={1440}>
              <Cell span={[4, 2]} skip={[0, 2]}>
                <Inner>
                  <FacebookButton />
                </Inner>
              </Cell>
              <Cell span={[4, 2]} skip={[0, 1]}>
                <Inner>
                  <GitHubButton />
                </Inner>
              </Cell>
              <Cell span={[4, 2]} skip={[0, 1]}>
                <Inner>
                  <ChromeButton />
                </Inner>
              </Cell>
            </Grid>
            <Block paddingTop="1rem"></Block>

            <div className={spacer} />
            <Grid
              gridColumns={12}
              gridGaps={[2, 6, 12]}
              gridGutters={[2, 6, 12]}
              gridMargins={[8, 16, 32]}
              gridMaxWidth={1440}>
              <Cell skip={[1, 3]} span={[10, 6]}>
                <Inner>
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Controlled Input"
                    clearOnEscape
                    startEnhancer={() => {
                      return <User />;
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
              <Cell skip={[1, 3]} span={[10, 6]}>
                <Inner>
                  <Input
                    onChange={(event) => setValue(event.currentTarget.value)}
                    type="password"
                    value={value}
                    startEnhancer={() => {
                      return <Key />;
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
              <Cell skip={[1, 3]} span={[10, 6]}>
                <Inner>
                  <StyledLink href="https://baseweb.design">
                    forgot password ?
                  </StyledLink>
                </Inner>
              </Cell>
            </Grid>

            <div className={spacer} />
            <Grid
              gridColumns={12}
              gridGaps={[2, 6, 12]}
              gridGutters={[2, 6, 12]}
              gridMargins={[8, 16, 32]}
              gridMaxWidth={1440}>
              <Cell skip={[1, 3]} span={[10, 6]}>
                <Inner>
                  <Button>Login</Button>
                </Inner>
              </Cell>
            </Grid>

            <div className={spacer} />
            <Grid
              gridColumns={12}
              gridGaps={[2, 6, 12]}
              gridGutters={[2, 6, 12]}
              gridMargins={[8, 16, 32]}
              gridMaxWidth={1440}>
              <Cell skip={[1, 3]} span={[10, 6]}>
                <Inner>
                  <Button>New Account</Button>
                </Inner>
              </Cell>
            </Grid>
          </div>

          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <StyledLink href="https://baseweb.design">
              copyright string 2021, press to back
            </StyledLink>
          </div>

          <div className={bottom_spacer} />
        </div>
      </div>
    </>
  );
};
