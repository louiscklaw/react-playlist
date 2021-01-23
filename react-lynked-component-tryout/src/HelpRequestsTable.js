import React from "react";
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
  createData("#01", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#02", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#03", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#04", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#05", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#06", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#07", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
  createData("#08", "2020年12月8日 5時27分", "#10", "Ekaterina Tankova"),
];

export default function HelpRequestsTable() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.line1}>Sample default 座席</Box>
      <Box className={classes.line2}>Noto Sans JP 座席</Box>
      <Box>HelpRequestsTable</Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeadText}>Order</TableCell>
              <TableCell className={classes.tableHeadText}>
                Request Time
              </TableCell>
              <TableCell className={classes.tableHeadText}>座席</TableCell>
              <TableCell className={classes.tableHeadText}>Name</TableCell>
              <TableCell className={classes.tableHeadText}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableBodyText}
                >
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableBodyText}>
                  {row.calories}
                </TableCell>
                <TableCell className={classes.tableBodyText}>
                  {row.fat}
                </TableCell>
                <TableCell className={classes.tableBodyText}>
                  {row.carbs}
                </TableCell>
                <TableCell>
                  <Button className={classes.Buttons}>{"完了"}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
