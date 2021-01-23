import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
} from "@material-ui/core";

const COLOR_RED = "#F14342";
const COLOR_BLUE = "#3E51B5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  AssignedTAbleDialogWrapper: {
    width: "426px",
    height: "201px",

    display: "flex",
    flexFlow: "row",

    font: "normal normal normal 14px/18px Hiragino Sans",
  },
  statusIndicator: {
    width: "10px",
    height: "100%",
    backgroundColor: COLOR_RED,
    borderRadius: "2px 0px 0px 2px",
  },
  InputTextField: {
    background: "#FFFFFF",
    border: "1px solid #B3B3B3",
    borderRadius: "0px",
    opacity: "1",
    margin: "1rem",
  },

  searchBar: {
    borderBottom: "0px solid rgba(0, 0, 0, 0.12)",
  },
}));

export default function AlertDialogSlide() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={classes.AssignedTAbleDialogWrapper}>
          <Box className={classes.statusIndicator}></Box>
          <Box className={classes.CardContent}>
            <Box>佐藤 様　大人 2 / 子供 2</Box>
            <Box>
              <Input
                defaultValue="Hello world"
                inputProps={{
                  "aria-label": "description",
                  disableUnderline: "true",
                }}
              />
              <TextField id="standard-basic" label="Standard" />
              <TextField
                fullWidth
                placeholder="Busque pelo nome da vaga"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
