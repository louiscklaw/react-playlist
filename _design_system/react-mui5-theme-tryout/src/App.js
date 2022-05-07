import React from 'react'

import Button from '@mui/material/Button'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

function App({ test_branch = false }) {
  let theme = createTheme(
    { palette: default_palette },
    {
      palette: {
        // primary: { main: '#800000' },
        secondary: {
          main: '#000080',
        },
      },
    },
  )

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          primary, helloworld
        </Button>
        <Button variant="contained" color="info">
          info, helloworld
        </Button>
        <Button color="secondary" variant="contained">
          secondary, helloworld
        </Button>
        <Button color="error" variant="contained">
          error, helloworld
        </Button>
        <pre>{JSON.stringify(theme.palette, null, 2)}</pre>
      </ThemeProvider>
    </div>
  )
}

export default App

const default_palette = {
  paper: '#f8f9fa',
  background: { default: '#f0f2f5' },
  text: { main: '#7f8c8d', focus: '#95a5a6' },
  transparent: { main: 'transparent' },
  white: { main: '#ffffff', focus: '#ffffff' },
  black: { light: '#000000', main: '#000000', focus: '#000000' },
  primary: { main: '#192a56', focus: '#273c75' },
  secondary: { main: '#bdc3c7', focus: '#ecf0f1' },
  info: { main: '#2980b9', focus: '#3498db' },
  success: { main: '#27ae60', focus: '#2ecc71' },
  warning: { main: '#f39c12', focus: '#f1c40f' },
  error: { main: '#c0392b', focus: '#e74c3c' },
  light: { main: '#f0f2f5', focus: '#f0f2f5' },
  dark: { main: '#2c3e50', focus: '#34495e' },

  grey: {
    100: '#f8f9fa',
    200: '#f0f2f5',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },

  gradients: {
    primary: { main: '#F24949', state: '#800000' },
    secondary: { main: '#747b8a', state: '#495361' },
    info: { main: '#49a3f1', state: '#1A73E8' },
    success: { main: '#66BB6A', state: '#43A047' },
    warning: { main: '#FFA726', state: '#FB8C00' },
    error: { main: '#EF5350', state: '#E53935' },
    light: { main: '#EBEFF4', state: '#CED4DA' },
    dark: { main: '#42424a', state: '#191919' },
  },

  socialMediaColors: {
    facebook: { main: '#3b5998', dark: '#344e86' },
    twitter: { main: '#55acee', dark: '#3ea1ec' },
    instagram: { main: '#125688', dark: '#0e456d' },
    linkedin: { main: '#0077b5', dark: '#00669c' },
    pinterest: { main: '#cc2127', dark: '#b21d22' },
    youtube: { main: '#e52d27', dark: '#d41f1a' },
    vimeo: { main: '#1ab7ea', dark: '#13a3d2' },
    slack: { main: '#3aaf85', dark: '#329874' },
    dribbble: { main: '#ea4c89', dark: '#e73177' },
    github: { main: '#24292e', dark: '#171a1d' },
    reddit: { main: '#ff4500', dark: '#e03d00' },
    tumblr: { main: '#35465c', dark: '#2a3749' },
  },

  badgeColors: {
    primary: { background: '#f8b3ca', text: '#cc084b' },
    secondary: { background: '#d7d9e1', text: '#6c757d' },
    info: { background: '#aecef7', text: '#095bc6' },
    success: { background: '#bce2be', text: '#339537' },
    warning: { background: '#ffd59f', text: '#c87000' },
    error: { background: '#fcd3d0', text: '#f61200' },
    light: { background: '#ffffff', text: '#c7d3de' },
    dark: { background: '#8097bf', text: '#1e2e4a' },
  },
  coloredShadows: {
    primary: '#e91e62',
    secondary: '#110e0e',
    info: '#00bbd4',
    success: '#4caf4f',
    warning: '#ff9900',
    error: '#f44336',
    light: '#adb5bd',
    dark: '#404040',
  },
  inputBorderColor: '#d2d6da',
  tabs: { indicator: { boxShadow: '#ddd' } },
}
