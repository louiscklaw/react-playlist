import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";

import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import top100Films from "./data.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [hello, setHello] = React.useState([top100Films[13]]);

  const handleOnClick = (e) => {
    setHello([top100Films[14]]);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5-alpha example 123321
        </Typography>
        <ProTip />
        <div className={classes.root}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={hello}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Multiple values"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[13]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="filterSelectedOptions"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={top100Films.map((option) => option.title)}
            defaultValue={[top100Films[13].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="freeSolo"
                placeholder="Favorites"
              />
            )}
          />
        </div>
      </Box>
      <Button onClick={(e) => handleOnClick}>onclick</Button>
    </Container>
  );
}
