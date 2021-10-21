import { makeStyles } from '@material-ui/core/styles';

const LYNKED_LIGHT_GREY = '#AAAAAA';
const LYNKED_RED = '#800000';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200,
  },
  TextInput: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    // border: '1px solid #E0E0E0',

    padding: '3px 3px',
    '& ::placeholder': {
      color: LYNKED_LIGHT_GREY,
    },
  },
  error_message: {
    color: LYNKED_RED,

    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',

    alignItems: 'center',
    paddingLeft: '0.25rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
}));

export { useStyles };
