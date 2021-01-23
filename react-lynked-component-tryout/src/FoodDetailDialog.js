import React from "react";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import {
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
} from "@material-ui/core";

import {
  LYNKED_RED,
  LYNKED_WHITE,
  LYNKED_GREEN,
  LYNKED_LIGHT_GREY,
  LYNKED_DEEP_GREY,
  LYNKED_BLACK,
} from "src/consts/colors";

const COLOR_RED = "#F14342";
const COLOR_BLUE = "#3E51B5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  TextInput: {
    border: "1px solid #E0E0E0",
    font: "normal normal bold 12px/16px Roboto",
    "& ::placeholder": {
      color: LYNKED_LIGHT_GREY,
      padding: "10px 20px",
    },
  },
  ButtonCancel: {
    backgroundColor: LYNKED_DEEP_GREY,
  },
  ButtonOK: {
    backgroundColor: LYNKED_GREEN,
  },
  DialogHead: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  DialogWrapper: {
    margin: "30px 30px",
  },
  DialogBody: {
    padding: "10px",
  },
  DialogHeadButtons: {
    display: "flex",
    flexFlow: "row",
  },
  Buttons: {
    width: "48%",
    padding: "10px",
    color: "white",
    font: "normal normal normal 11px/15px Hiragino Sans",

    letterSpacing: "0.12px",
    borderRadius: "1px",
  },
  DialogBottomButtons: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AddImagePlaceHolder: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px dashed #707070",
    borderRadius: "9px",

    width: "100%",
    minHeight: "300px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  AddImageButton: {
    color: LYNKED_RED,
  },
  TextInputTitle: {
    font: "normal normal bold 12px/16px Roboto",
    paddingBottom: "5px",
  },
  TextInputGroup: {
    padding: "10px 10px",
  },
}));

export default function FoodDetailDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        FoodDetailDialog
      </Button>

      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={classes.DialogWrapper}>
          <Box className={classes.DialogHead}>
            <Box>FoodDetail</Box>
            <Box className={classes.DialogHeadButtons}>
              <Box>
                <FileCopyIcon />
              </Box>
              <Box>
                <DeleteIcon />
              </Box>
            </Box>
          </Box>

          <Box className={classes.DialogBody}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12} lg={6}>
                <Box className={classes.AddImagePlaceHolder}>
                  <Box>
                    <Button
                      className={classes.AddImageButton}
                      startIcon={<AddAPhotoIcon />}
                    >
                      画像を追加する
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Grid container>
                  <Grid item xs={12} lg={8}>
                    <Box className={classes.TextInputGroup}>
                      <Box className={classes.TextInputTitle}>商品名</Box>
                      <Box className={classes.TextInputWrapper}>
                        <TextField
                          className={classes.TextInput}
                          fullWidth
                          placeholder="TABLE NUMBER"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          // value="TABLE NUMBER"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box className={classes.TextInputGroup}>
                      <Box className={classes.TextInputTitle}>値段</Box>
                      <Box className={classes.TextInputWrapper}>
                        <TextField
                          className={classes.TextInput}
                          fullWidth
                          placeholder=""
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Box className={classes.TextInputGroup}>
                      <Box className={classes.TextInputTitle}>カテゴリー</Box>
                      <Box className={classes.TextInputWrapper}>
                        <TextField
                          className={classes.TextInput}
                          fullWidth
                          placeholder=""
                          InputProps={{
                            disableUnderline: true,
                          }}
                          // value="TABLE NUMBER"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Box className={classes.TextInputGroup}>
                      <Box className={classes.TextInputTitle}>商品の詳細</Box>
                      <Box className={classes.TextInputWrapper}>
                        <TextField
                          className={classes.TextInput}
                          fullWidth
                          placeholder="TABLE NUMBER"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          // value="TABLE NUMBER"
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Grid container justify="center">
                  <Grid item xs={6} lg={6}>
                    <Box className={classes.DialogBottomButtons}>
                      <Button
                        className={`${classes.Buttons} ${classes.ButtonCancel}`}
                      >
                        {"キャンセルする"}
                      </Button>
                      <Button
                        className={`${classes.Buttons} ${classes.ButtonOK}`}
                      >
                        {"登録する"}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
