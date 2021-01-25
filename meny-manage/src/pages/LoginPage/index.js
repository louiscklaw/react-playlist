import React from "react";
import { LYNKED_RED, LYNKED_WHITE } from "src/consts/colors";
import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";

// import { ReactComponent as ReactLogo } from 'src/assets/lynked_logo.svg';
// import active_lang from "src/langs/jp_en";

const GREETINGS = "login now to access your linked account.";
const FORGOT_PASSWORD = "Forgot your password ?";

const LoginButton = styled(Button)({
  width: "345px",
  height: "47px",
  background: "#000000 0% 0% no-repeat padding-box",
  borderRadius: "4px",
  opacity: "1",
  margin: "1rem",
});

const LoginTextField = styled(TextField)({
  width: "345px",
  background: "#FFFFFF",
  border: "1px solid #B3B3B3",
  borderRadius: "4px",
  opacity: "1",
  margin: "1rem",
});

const TextBox = styled(Box)({
  textAlign: "center",
  letterSpacing: "0px",
  color: "#FFFFFF",
  opacity: "1",
});

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    backgroundColor: LYNKED_RED,
    display: "flex",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      flexFlow: "column",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      flexFlow: "column",
    },
    [theme.breakpoints.up("lg")]: {
      flexFlow: "row",
    },
  },
  logoWrapper: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "50px",
    },
  },
  lynkedLogo: {
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      minHeight: "10vh",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "10vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "160px",
      marginBottom: "30px",
    },
  },
  loginAd: {
    [theme.breakpoints.down("md")]: {
      order: 2,
      padding: "0px",
      width: "100%",
      height: "30%",
    },
    [theme.breakpoints.up("md")]: {
      order: 2,
      padding: "0px",
      width: "100%",
      top: "50vh",
      height: "50vh",
    },
    [theme.breakpoints.up("lg")]: {
      order: 2,
      padding: "0px",
      width: "50%",
      height: "100vh",
    },
  },
  loginInput: {
    textAlign: "center",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      order: 1,
      padding: "0px",
      width: "100%",
      height: "60%",
    },
    [theme.breakpoints.up("md")]: {
      order: 1,
      padding: "0px",
      width: "100%",
      height: "40vh",
    },
    [theme.breakpoints.up("lg")]: {
      order: 3,
      padding: "0px",
      width: "50%",
      height: "100vh",
    },
  },
  loginInputText: {
    [theme.breakpoints.up("lg")]: {
      margin: "5px 0px",
    },
  },
  textMessages: {
    [theme.breakpoints.up("lg")]: {
      margin: "20px 0px",
    },
  },
  loginInputButton: {
    [theme.breakpoints.up("lg")]: {
      margin: "20px 0px",
    },
  },
}));

export default function HelloLoginScreen() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.loginRoot}>
        <div
          className={classes.loginAd}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516128043650-037fbdbd0b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={classes.loginInput}>
          <Box style={{}}>
            <Box className={classes.logoWrapper}>
              <div
                className={classes.lynkedLogo}
                style={{
                  backgroundImage: `url('/static/lynked_logo.svg')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Box>

            <TextBox className={classes.textMessages}>{GREETINGS}</TextBox>
            <form name="login-form" noValidate autoComplete="off">
              <Box className={classes.loginInputText}>
                <LoginTextField id="email" placeholder="email" size="small" />
              </Box>
              <Box className={classes.loginInputText}>
                <LoginTextField
                  id="password"
                  placeholder="password"
                  size="small"
                  type="password"
                />
              </Box>
              <Box className={classes.loginInputButton}>
                <LoginButton variant="contained">{"LOGIN_NOW"}</LoginButton>
              </Box>
            </form>
            <TextBox className={classes.textMessages}>
              {"FORGOT_PASSWORD"}
            </TextBox>
          </Box>
        </div>
      </div>
    </>
  );
}
