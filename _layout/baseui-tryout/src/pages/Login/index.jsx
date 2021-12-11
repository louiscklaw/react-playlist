import React from 'react';
import styles from './styles.module.scss';
import { Input } from 'baseui/input';
import { Button, SHAPE } from 'baseui/button';
import { StyledLink } from 'baseui/link';
import { Block } from 'baseui/block';
import { Grid, Cell, BEHAVIOR } from 'baseui/layout-grid';
import { Facebook } from 'react-feather';
import { GitHub } from 'react-feather';
import { Twitch } from 'react-feather';
import { useStyletron } from 'baseui';

import Upload from 'baseui/icon/upload';

import { logo1 } from '../../assets';

const LoginButton = () => {
  return (
    <Button
      onClick={() => alert('click')}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({ width: '100%' }),
        },
      }}>
      Login
    </Button>
  );
};

const RegisterButton = () => {
  return (
    <Button
      onClick={() => alert('click')}
      overrides={{
        BaseButton: { style: ({ $theme }) => ({ width: '100%' }) },
      }}>
      Register
    </Button>
  );
};

const Inner = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}>
      {children}
    </div>
  );
};

export default () => {
  const [value, setValue] = React.useState('Hello');

  return (
    <>
      {/* <div className={styles.helloworld} style={{ position: 'absolute' }}>
        Login layout helloworld
      </div> */}
      <div className={styles.container}>
        <div
          className={styles.restaurant_logo}
          style={{
            backgroundImage: `url(${logo1})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}></div>
        <div
          className={styles.restaurant_image}
          style={{
            backgroundImage: `url(https://source.unsplash.com/1600x900/?nature,water)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}></div>
        <div className={styles.login_panel_container}>
          <div style={{ flex: 1 }}>&nbsp;</div>
          <div className={styles.login_panel}>
            <div style={{ flex: 1 }}>
              <Cell span={12}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  login&nbsp;by
                </div>
              </Cell>
            </div>
            <div style={{ flex: 1 }}>&nbsp;</div>
            <div style={{ flex: 1, width: '100%' }}>
              <Grid gridColumns={12} gridMaxWidth={1440}>
                <Cell skip={[2]} span={[8]}>
                  <Grid gridColumns={12} gridMaxWidth={1440}>
                    <Cell span={4}>
                      <Inner>
                        <Button shape={SHAPE.circle}>
                          <Facebook />
                        </Button>
                      </Inner>
                    </Cell>
                    <Cell span={4}>
                      <Inner>
                        <Button shape={SHAPE.circle}>
                          <GitHub />
                        </Button>
                      </Inner>
                    </Cell>
                    <Cell span={4}>
                      <Inner>
                        <Button shape={SHAPE.circle}>
                          <Twitch />
                        </Button>
                      </Inner>
                    </Cell>
                  </Grid>
                </Cell>
              </Grid>
            </div>
            <div style={{ flex: 1 }}>&nbsp;</div>
            <div style={{ flex: 1 }}>
              <Grid gridColumns={12} gridMaxWidth={1440}>
                <Cell skip={[2]} span={[8]}>
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Controlled Input"
                    clearOnEscape
                  />
                </Cell>
                <Cell span={12}>
                  <div style={{ height: '1rem' }}></div>
                </Cell>
                <Cell skip={[2]} span={[8]}>
                  <Input
                    onChange={(event) => setValue(event.currentTarget.value)}
                    type="password"
                    value={value}
                  />
                </Cell>
              </Grid>
            </div>
            <div style={{ flex: 1 }}>&nbsp;</div>
            <div
              style={{
                flex: 1,
                width: '100%',
                textAlign: 'center',
                marginTop: '10px',
              }}>
              forgot password ?
            </div>
            <div style={{ flex: 1 }}></div>
            <div style={{ flex: 1 }}>
              <Grid gridColumns={12} gridMaxWidth={1440}>
                <Cell skip={[2]} span={[8]}>
                  <Grid gridColumns={12}>
                    <Cell span={12}>
                      <div style={{ height: '1rem' }}></div>
                    </Cell>

                    <Cell span={12}>
                      <RegisterButton />
                    </Cell>

                    <Cell span={12}>
                      <div style={{ height: '1rem' }}></div>
                    </Cell>

                    <Cell span={12}>
                      <LoginButton />
                    </Cell>
                  </Grid>
                </Cell>
              </Grid>
            </div>
          </div>

          <div style={{ flex: 1 }}>&nbsp;</div>

          <div className={styles.link}>
            <StyledLink href="https://baseweb.design">
              copyright test string, click to back
            </StyledLink>
          </div>

          <div style={{ flex: 1 }}>&nbsp;</div>
        </div>
      </div>
    </>
  );
};
