import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import BillingManagementCard from "src/components/BillingManagementCard";

import {
  LYNKED_RED,
  LYNKED_RED_HOVER,
  LYNKED_WHITE,
  LYNKED_GREEN,
  LYNKED_GREEN_HOVER,
  LYNKED_LIGHT_GREY,
  LYNKED_LIGHT_GREY_HOVER,
  LYNKED_DEEP_GREY,
  LYNKED_DEEP_GREY_HOVER,
  LYNKED_BLACK,
} from "src/consts/colors";

const useStyles = makeStyles({
  line1: {},
  line2: { font: "normal normal bold 12px/16px 'Noto Sans JP'" },
  table: {
    minWidth: 650,
    font: "normal normal bold 12px/16px 'Noto Sans JP'",
    "& thead": {
      background: "#E0E0E0 0% 0% no-repeat padding-box",
      textTransform: "uppercase",
    },
    "& tbody": {
      "& th": {},
      "& td": { padding: "8px" },
    },
  },
  Buttons: {
    width: "120px",
    height: "30px",
    color: "white",
    letterSpacing: "0.12px",
    borderRadius: "1px",
    backgroundColor: LYNKED_GREEN,
    font: "normal normal bold 10px/14px 'Noto Sans JP'",
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
  },
  tableHeadText: {
    color: LYNKED_BLACK,
    font: "normal normal bold 12px/16px Roboto",
  },
  tableBodyText: {
    color: LYNKED_LIGHT_GREY,
    font: "normal normal bold 12px/16px 'Noto Sans JP'",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
  createData(
    "ホテルモントレ銀座20周年スペシャルランチ",
    "x2",
    "#10 Ekaterina Tankova",
    "2020年12月8日 5時27分"
  ),
];

export default function HelpRequestsTable() {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="left" spacing={3}>
        {[1, 2, 3, 4, 5].map((x) => {
          return (
            <>
              <Grid item xs={6}>
                <BillingManagementCard />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
