import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/OutlinedInput';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import {
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '🎳熱賣',
  '👦大割引'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const handleDelete = () =>{};

  return (
    <div>
      <CardContent>
        <Grid container spacing={1} >
          {/* {JSON.stringify(food_detail, null, 2)} */}
          <Grid item md={6} sm={12}>
            <Box style={{display:'flex', flexFlow:'column'}}>
              <Box m="0.5rem" style={{
                textAlign:'center'
              }}>

                <Typography variant="h6" gutterBottom>
                  {`active_lang.CURRENT_FOOD_IMAGE`}
                </Typography>

              </Box>
              <Box m="0.5rem" width={1}>
                <TextField
                    fullWidth
                    label={`active_lang.FOOD_NAME`}
                    name='name'
                    onInput={handleChange}
                    required
                    value={`update_food_detail.name`}
                    variant="outlined"
                    style={{width: '100%'}}
                  />
              </Box>

              <Box m="0.5rem" width={1}>
                <FormControl variant="outlined" className={classes.formControl} style={{maxWidth: 'unset', minWidth:'unset', width:'100%', margin:'unset'}}>
                  <InputLabel id="demo-mutiple-chip-label" >active_lang.FOOD_CATEGORY_LABEL</InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    // input={<OutlinedInput variant="outlined"  id="select-multiple-chip" />}
                    input={<TextField id="select-multiple-chip" label="Outlined" variant="outlined" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} className={classes.chip} variant="outlined" color="primary" onDelete={handleDelete} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}

                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </CardContent>

    </div>
  );
}
