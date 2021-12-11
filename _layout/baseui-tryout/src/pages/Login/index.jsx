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
        BaseButton: {
          style: ({ $theme }) => ({ width: '100%' }),
        },
      }}>
      Register
    </Button>
  );
};

export default () => {
  const [value, setValue] = React.useState('Hello');

  return (
    <>
      <div className={styles.helloworld} style={{ position: 'absolute' }}>
        Login layout helloworld
      </div>
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
        <div className={styles.login_panel}>
          <Grid gridColumns={12} gridMaxWidth={1440}>
            <Cell>
              <div>1</div>
            </Cell>
            <Cell>
              <div>2</div>
            </Cell>
            <Cell>
              <div>3</div>
            </Cell>
            <Cell>
              <div>4</div>
            </Cell>
            <Cell>
              <div>5</div>
            </Cell>
            <Cell>
              <div>6</div>
            </Cell>
            <Cell>
              <div>7</div>
            </Cell>
            <Cell>
              <div>8</div>
            </Cell>
            <Cell>
              <div>9</div>
            </Cell>
            <Cell>
              <div>10</div>
            </Cell>
            <Cell>
              <div>11</div>
            </Cell>
            <Cell>
              <div>12</div>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridMaxWidth={1440}>
            <Cell skip={2} span={8}>
              <Grid gridColumns={12} gridMaxWidth={1440}>
                <Cell span={4}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Button shape={SHAPE.circle}>
                      <Facebook />
                    </Button>
                  </div>
                </Cell>
                <Cell span={4}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Button shape={SHAPE.circle}>
                      <GitHub />
                    </Button>
                  </div>
                </Cell>
                <Cell span={4}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Button shape={SHAPE.circle}>
                      <Twitch />
                    </Button>
                  </div>
                </Cell>
              </Grid>
            </Cell>
          </Grid>

          <Grid gridColumns={12} gridMaxWidth={1440}>
            <Cell skip={[2]} span={[8]}>
              <Block height={'5rem'} />
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Controlled Input"
                clearOnEscape
              />
            </Cell>

            <Cell skip={[2]} span={[8]}>
              <Block height={'1rem'} />
              <Input
                onChange={(event) => setValue(event.currentTarget.value)}
                type="password"
                value={value}
              />
              <div className={styles.link}>
                <StyledLink href="https://baseweb.design">
                  forgot password?
                </StyledLink>
              </div>
            </Cell>

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

          <Grid behavior={BEHAVIOR.fluid}>
            <Cell span={12}>
              <div className={styles.link}>
                <StyledLink href="https://baseweb.design">
                  copyright test string
                </StyledLink>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    </>
  );
};
