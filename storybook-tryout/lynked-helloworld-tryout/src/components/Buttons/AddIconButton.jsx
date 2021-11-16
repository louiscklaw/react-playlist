import React from 'react';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import {
  Button,
  createTheme,
  makeStyles,
  ThemeProvider,
  green,
  purple,
} from '@material-ui/core';

import {
  LYNKED_DANGER,
  LYNKED_DANGER_HOVER,
  LYNKED_DANGER_SUPER_LIGHT,
  LYNKED_DANGER_BACKGROUND,
  LYNKED_DANGER_DARKEN,
  LYNKED_PRIMARY,
  LYNKED_PRIMARY_HOVER,
  LYNKED_PRIMARY_SUPER_LIGHT,
  LYNKED_PRIMARY_BACKGROUND,
  LYNKED_PRIMARY_DARKEN,
  LYNKED_SECONDARY,
  LYNKED_SECONDARY_HOVER,
  LYNKED_SECONDARY_SUPER_LIGHT,
  LYNKED_SECONDARY_BACKGROUND,
  LYNKED_SECONDARY_DARKEN,
  LYNKED_INFO,
  LYNKED_INFO_HOVER,
  LYNKED_INFO_SUPER_LIGHT,
  LYNKED_INFO_BACKGROUND,
  LYNKED_INFO_DARKEN,
  LYNKED_SUCCESS,
  LYNKED_SUCCESS_HOVER,
  LYNKED_SUCCESS_SUPER_LIGHT,
  LYNKED_SUCCESS_BACKGROUND,
  LYNKED_SUCCESS_DARKEN,
  LYNKED_WARNING,
  LYNKED_WARNING_HOVER,
  LYNKED_WARNING_SUPER_LIGHT,
  LYNKED_WARNING_BACKGROUND,
  LYNKED_WARNING_DARKEN,
  LYNKED_MUTED,
  LYNKED_MUTED_HOVER,
  LYNKED_MUTED_SUPER_LIGHT,
  LYNKED_MUTED_BACKGROUND,
  LYNKED_MUTED_DARKEN,
  LYNKED_WHITE,
  LYNKED_WHITE_HOVER,
} from 'src/consts/colors';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(() => ({
  ButtonStyle: { padding: '0.75rem', margin: '0.15rem' },
  PrimaryButtonStyle: {
    backgroundColor: LYNKED_PRIMARY,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_PRIMARY_HOVER,
    },
  },
  SecondaryButtonStyle: {
    backgroundColor: LYNKED_SECONDARY,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_SECONDARY_HOVER,
    },
  },
  InfoButtonStyle: {
    backgroundColor: LYNKED_INFO,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_INFO_HOVER,
    },
  },
  SuccessButtonStyle: {
    backgroundColor: LYNKED_SUCCESS,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_SUCCESS_HOVER,
    },
  },
  WarningButtonStyle: {
    backgroundColor: LYNKED_WARNING,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_WARNING_HOVER,
    },
  },
  MutedButtonStyle: {
    backgroundColor: LYNKED_MUTED,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_MUTED_HOVER,
    },
  },
  DangerButtonStyle: {
    backgroundColor: LYNKED_DANGER,
    color: LYNKED_WHITE,
    '&:hover': {
      backgroundColor: LYNKED_DANGER_HOVER,
    },
  },

  button_label: { fontSize: '16px', lineHeight: '12px' },
}));

export default function AddIconButton({ color, label, onClick, variant }) {
  let classes = useStyles();

  let style_name = [
    'PrimaryButtonStyle',
    'SecondaryButtonStyle',
    'InfoButtonStyle',
    'SuccessButtonStyle',
    'WarningButtonStyle',
    'MutedButtonStyle',
    'DangerButtonStyle',
  ];

  let button_styles = [
    classes.PrimaryButtonStyle,
    classes.SecondaryButtonStyle,
    classes.InfoButtonStyle,
    classes.SuccessButtonStyle,
    classes.WarningButtonStyle,
    classes.MutedButtonStyle,
    classes.DangerButtonStyle,
  ];

  let button_sizes = ['small', 'medium', 'large'];
  let start_icon = [<AddCircleOutlineIcon />];

  let [test_sets, setTestSets] = React.useState(button_styles);

  React.useEffect(() => {
    let result = [];
    button_styles.forEach((button_style, idx) =>
      button_sizes.forEach((button_size) => {
        result.push({
          name: style_name[idx],
          button_style,
          button_size,
          start_icon,
        });
      })
    );
    setTestSets(result);
  }, []);

  return (
    <>
      <div>
        {test_sets.map((test_set) => {
          return (
            <div className={classes.ButtonStyle}>
              <Button
                variant={'contained'}
                className={clsx(test_set.button_style)}
                startIcon={test_set.start_icon}
                onClick={onClick}
                size={test_set.button_size}>
                <span className={classes.button_label}>{label}</span>
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}

AddIconButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
