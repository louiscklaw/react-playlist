import React from "react";
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
} from "src/consts/colors";
import { styled, Box, TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  BillingCardContainer: {
    //
    borderRadius: "2px",
    boxShadow: "0px 1px 2px #00000029",
  },
  CardHeader: {
    backgroundColor: LYNKED_LIGHT_GREY,
    padding: "10px 20px",

    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
  },
  BillToTable: {
    font: "normal normal normal 15px/20px Hiragino Sans",
  },
  BillToPerson: {
    font: "normal normal normal 15px/20px Hiragino Sans",
  },
  BillEntryWrapper: {
    border: "1px solid #E0E0E0",
    padding: "5px 20px",
  },
  BillEntryRowTop: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  BillEntryRowBottom: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BillTime: {
    font: "normal normal normal 9px/18px Hiragino Sans",
    color: LYNKED_LIGHT_GREY,
  },
  BillItemName: {
    padding: "5px 0px",
    font: "normal normal normal 12px/18px Hiragino Sans",
  },
  ItemSubTotal: {
    color: LYNKED_RED,
  },
  CardFooter: {
    display: "flex",
    flexFlow: "column",
    padding: "0px 20px",
    paddingBottom: "20px",
  },
  BillTotal: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  FooterBody: {
    padding: "20px 2px",
    width: "50%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
    font: "normal normal normal 15px/28px Hiragino Sans",
    color: LYNKED_GREEN,
  },
  FooterTotalPrice: {
    padding: "20px 20px",
    width: "50%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    font: "normal normal normal 12px/18px Hiragino Sans",
  },
  FooterItem: {},
  TotalPrice: {
    padding: "0px 10px",
    textAlign: "right",
    font: "normal normal normal 15px/28px Hiragino Sans",
    color: LYNKED_GREEN,
  },
  TotalExplain: {
    font: "normal normal normal 10px/15px Hiragino Sans",
  },
  FooterButtonsGroup: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  FooterButtons: {
    width: "48%",
  },
  FooterButtonViewAllL: {
    width: "100%",
    backgroundColor: LYNKED_DEEP_GREY,
    color: LYNKED_WHITE,
    borderRadius: "1px",
    "&:hover": {
      backgroundColor: LYNKED_DEEP_GREY_HOVER,
    },
  },
  FooterButtonFinishBill: {
    width: "100%",
    backgroundColor: LYNKED_GREEN,
    color: LYNKED_WHITE,
    borderRadius: "1px",
    "&:hover": {
      backgroundColor: LYNKED_GREEN_HOVER,
    },
  },
}));

export default function BillingManagementCard() {
  const classes = useStyles();

  function BillStatusIndicator() {
    return (
      <>
        <Box style={{ paddingLeft: "50px" }}>
          <Box
            style={{
              height: "10px",
              width: "100px",

              backgroundColor: LYNKED_GREEN,
            }}
          ></Box>
        </Box>
      </>
    );
  }

  function BillEntry() {
    return (
      <>
        <Box className={classes.BillEntryWrapper}>
          <Box className={classes.BillEntryRowTop}>
            <Box className={classes.BillTime}>
              {"ご注文日時: 2020年12月8日 5時27分"}
            </Box>
            <Box>
              <BillStatusIndicator />
            </Box>
          </Box>
          <Box className={classes.BillEntryRowBottom}>
            <Box className={classes.BillItemName}>
              {"ホテルモントレ銀座20周年スペシャルランチ"}
            </Box>
            <Box className={classes.ItemSubTotal}>{"¥5,500 x 2点"}</Box>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box className={classes.BillingCardContainer}>
        <Box className={classes.CardHeader}>
          <Box className={classes.BillToTable}>{"座席番号 10"}</Box>
          <Box className={classes.BillToPerson}>{"佐藤 様"}</Box>
        </Box>
        <Box>
          <BillEntry />
          <BillEntry />
          <BillEntry />
        </Box>
        <Box className={classes.CardFooter}>
          <Box className={classes.BillTotal}>
            <Box className={classes.FooterBody}>
              <Box>TOTAL ITEMS</Box>
              <Box>合計</Box>
            </Box>
            <Box className={classes.FooterTotalPrice}>
              <Box className={classes.TotalPrice}>¥1,100,000</Box>
              <Box className={classes.TotalExplain}>
                （サービス料 + 消費税）
              </Box>
            </Box>
          </Box>
          <Box className={classes.FooterButtonsGroup}>
            <Box className={classes.FooterButtons}>
              <Button className={classes.FooterButtonViewAllL}>
                {"全て見る"}
              </Button>
            </Box>
            <Box className={classes.FooterButtons}>
              <Button className={classes.FooterButtonFinishBill}>
                {"完了"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
