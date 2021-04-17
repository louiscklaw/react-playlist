import React from 'react';
import {Link } from '@material-ui/core';

let FOOD_EDIT='食之物編輯 / FOOD_EDIT'
let CUSTOMER_NAME='名前 / CUSTOMER_NAME'
let CUSTOMER_NOTES='備考 / CUSTOMER_NOTES'
let NUMBER_OF_PEOPLES="大人＋子供 / NUMBER_OF_PEOPLES"
let SUBMIT_TIME="登錄時間"
let LINEUP_ORDERING="排"

// Nav menu
let OVERVIEW='總覽 / OVERVIEW'
let SEAT_RESERVATION='席の予約管理 / SEAT_RESERV'
let ORDER_MANAGMENT='オーダー管理 / ORDER_MNGT'
let ACCOUNT_MANAGMENT='会計管理 / ACC_MNGT'
let MENU_MANAGMENT='メニュー管理 / MENU_MNGT'
let SETTINGS='設定 / SETTINGS'
let HELLOWORLD='HELLOWORLD'
let HELLOWORLD_ALERTS='ALERTS TRYOUT'
let ABOUT_ME='關於這頁 / About me'
let LOGIN_USING_SOCIAL_NETWORK="經網絡の登綠 /  Login using social network"
let SIGN_IN_TITLE='登綠 / Sign in'
let SIGN_IN_DESC='登綠到內部の系統 / Sign in on the internal platform'
let LOGIN='登入 / Login'
let LOGOUT='登出 / Logout'
let CHANGE_LOG='改動 / Change log'
let ADD_CUSTOMER='新加顧客 / ADD CUSTOMER'
let IMPORT="IMPORT"
let EXPORT="EXPORT"
let BUDGET='本金 / BUDGET'
let TOTAL_CUSTOMERS='總客人 / TOTAL CUSTOMERS'
let UTILIZATION="入座率 / UTILIZATION"
let TOTAL_PROFIT="總利率 / TOTAL PROFIT"
let SINCE_LAST_MONTH='從上個月の開始 / since last month'
let LATEST_SALES='最近銷售の數字 / LATEST SALES'
let LAST_7_DAYS='截至最近の七天 / COUNT TO LAST 7 DAYS'
let CUSTOMER_CATEGORY='食客の種類 / CUSTOMER CATEGORY'
let LATEST_ORDERS="最近の賬單 / latest orders"
let SEARCH_CUSTOMER="顧客の搜尋 / Customer search"
let RESTAURANT_STRING='食店の控制介面   /   Restaurant Mgnt Panel'
let LOGIN_SUCCESS='登入の正常 / Login success ...'
let HELLOWORLD_FORMS='FORMの測試 / Form test'

let TEST_ALERT='警號の測試 / Test alert ...'
let THIS_IS_SUCCESS_ALERT='這是成功の警號 / this is success alert'

let RESTAURANT_NAME="カテゴリー / RESTAURANT NAME"
let FOOD_NAME='名前 / FOOD NAME'
let FOOD_DESCRIPTION = '詳細 / FOOD DESCRIPTION'
let FOOD_PRICE = '値段 / FOOD PRICE'
let FOOD_PHOTO ='画像 / FOOD PHOTO'
let PLEASE_SPECIFY_THE_FIRST_NAME="請給食物の名字 / Please specify the first name"

let LOGIN_WITH_FACEBOOK='經 FACEBOOK 登入 / login using facebook'
let VIEW_ALL="全部の檢視 / VIEW ALL"
let CHART_OVERVIEW="全部の概覽 / OVERVIEW"

let ORDER_REF="賬單の參考 / Order Ref."
let ORDER_STATUS="狀の態 / Status"
let ORDER_PENDING="等の待 / Pending"
let ORDER_DELIVERED="送の達 / Delivered"
let ORDER_REFUNDED="回の水 / Refunded"

let FOOD_DIALOG_TITLE="食の物の編輯 /  FOOD EDIT FORM"
let DIALOG_REPLY_YES="好呀の唔該請便 / YES"
let DIALOG_REPLY_NO="不了の好行唔送 / NO"

let PLEASE_SELECT_SIGN_IN_METHOD1="請SIGN_INの方法の選擇"
let PLEASE_SELECT_SIGN_IN_METHOD2="please select sign in method:"

let SEARCH_FOOD="超快速の食の物の搜索 / search food"

let LYNKED_COPYRIGHT_RESERVED=(
  <>
    2020 <Link href="www.google.com">lynked</Link> copyright reserved
  </>
)

let TERMS_AND_CONDITIONS=(
  <>
    <Link href="www.example.com">Terms and conditions</Link>
  </>
)

let NUMBER_OF_CUSTOMER_WAITING_TICKET="現在の客戶等侯の數 / number of customer waiting"
let NUMBER_OF_CUSTOMER_GOT_TICKETTODAY="今天の客戶票の取 / number of customer got ticket today"

let LAST_UPDATE="最後の更新 / last update"
let LINE_UP_ORDERING_REF="Ref"

let SEAT_ASSIGNED="位己編 / assigned"
let SEAT_WAITING="等の待 / waiting"
let SEAT_REQUEST_NOTE="特別の要求 / notes"
let TICKET_TAKE_TIME="取票時間"
let ASSIGN_TICKET_DIALOG_TITLE="取票の編輯 / ticket assign dialog"
let SET_SEAT_REQUEST_NUMBER="編の號碼 / assign seat number"

let CONFIRM_DELETE_FOOD_ITEM="食物の刪徐の確定？ / Confirm delete food item ?"
let DELETE_FOOD_ANS_YES='是的の請便 / Yes, Please'
let DELETE_FOOD_ANS_NO="不了の躝啦 / No, Get Out"

let MENU_DELETE="刪の徐 / Delete"
let MENU_PREVIEW_ON_WEBSITE="網頁預の視 / Preview"

let FOOD_EDIT_TITLE='食の物の編輯 / Food edit page'

let ADD_FOOD='新食の物の念 / Add new food'

let FEEDBACK_FORM_TITLE="黎黎黎... 幫緊你幫緊你 / SOMEBODY HELLLLLLLP !!!"
let SEND_FEEDBACK="快 L D整啦 / Please kindly help to fix... "

let SEND_FEEDBACK_DEFAULT_TEXT="伯母の你好 / Hi, Auntie"
let FEEDBACK_DETAIL_DESCRIPTION="有咩想要 / wanted item"
let FEEDBACK_CONTACT_POINT="可以點搵返我？ / you can reach me by..."

let QUEUE_MANAGE_TITLE='排隊の安排 / queue managment'

let ABOUT_LYNKED='關於 LYNKED'
let FEEDBACK_FORM_STAR_RATING="值幾多分? / How many star should I have ?"

let ANNOUNCEMENT_DISMISS='知道了 / OK I KNOW la'
let ANNOUNCEMENT_TITLE="最新の消息 / News ... "

let CONFIRM_LOGOUT_TITLE='真係要走？/REALLY QUIT ?'
let CONFIRM_LOGOUT_BODY='我好 L 唔拾得你喔....'

let TERMS_AND_CONDS='規約と条件 / Terms and conditions'

let TNC_BACK='回の去 / back'

let ASSIGNED_TABLE_NUMBER='枱の號 / table number'

let UPDATE_ASSIGN_TABLE_DONE="更新枱の編號の完成 / update assign table done"
let UPDATE_FOOD_DETAIL_DONE="更新食の物の完成 / update food detail done"

let CURRENT_FOOD_IMAGE="現在の圖文 / current image"

let FOOD_LONG_NAME="食物の解說 / simple food details"

let DELETE_FOOD_DONE="食物の刪徐完成 / delete food done"

let BOTTOM_NAV_MENU_TEXT="菜の單"

let ADD_TO_FAVOURITE="我の最愛の加の"

export default {
  CUSTOMER_NAME,
  CUSTOMER_NOTES,
  NUMBER_OF_PEOPLES,
  SUBMIT_TIME,
  LINEUP_ORDERING,
  OVERVIEW,
  SEAT_RESERVATION,
  ORDER_MANAGMENT,
  ACCOUNT_MANAGMENT,
  MENU_MANAGMENT,
  SETTINGS,
  HELLOWORLD,
  HELLOWORLD_ALERTS,
  ABOUT_ME,
  LOGIN_USING_SOCIAL_NETWORK,
  SIGN_IN_TITLE,
  SIGN_IN_DESC,
  LOGIN, LOGOUT,
  CHANGE_LOG,
  ADD_CUSTOMER,
  IMPORT, EXPORT,
  BUDGET,
  TOTAL_CUSTOMERS,
  UTILIZATION,
  TOTAL_PROFIT,
  SINCE_LAST_MONTH,
  LATEST_SALES,
  LAST_7_DAYS,
  CUSTOMER_CATEGORY,
  LATEST_ORDERS,
  SEARCH_CUSTOMER,
  RESTAURANT_STRING,
  LOGIN_SUCCESS,
  TEST_ALERT,
  THIS_IS_SUCCESS_ALERT,
  HELLOWORLD_FORMS,
  RESTAURANT_NAME,
  FOOD_NAME,
  FOOD_DESCRIPTION,
  FOOD_PRICE,
  FOOD_PHOTO,
  PLEASE_SPECIFY_THE_FIRST_NAME,
  LOGIN_WITH_FACEBOOK,
  VIEW_ALL,
  CHART_OVERVIEW,
  ORDER_REF,
  ORDER_STATUS,
  ORDER_PENDING,
  ORDER_DELIVERED,
  ORDER_REFUNDED,
  DIALOG_REPLY_NO,
  DIALOG_REPLY_YES,
  FOOD_DIALOG_TITLE,
  PLEASE_SELECT_SIGN_IN_METHOD1,
  PLEASE_SELECT_SIGN_IN_METHOD2,
  LYNKED_COPYRIGHT_RESERVED,
  NUMBER_OF_CUSTOMER_WAITING_TICKET,
  NUMBER_OF_CUSTOMER_GOT_TICKETTODAY,
  LAST_UPDATE,
  LINE_UP_ORDERING_REF,

  SEAT_ASSIGNED,
  SEAT_WAITING,
  TICKET_TAKE_TIME,
  ASSIGN_TICKET_DIALOG_TITLE,
  SEAT_REQUEST_NOTE,
  SET_SEAT_REQUEST_NUMBER,
  TERMS_AND_CONDITIONS,
  CONFIRM_DELETE_FOOD_ITEM,
  DELETE_FOOD_ANS_YES, DELETE_FOOD_ANS_NO,
  MENU_DELETE,
  MENU_PREVIEW_ON_WEBSITE,

  SEARCH_FOOD,
  FOOD_EDIT_TITLE,
  ADD_FOOD,

  FEEDBACK_FORM_TITLE,
  SEND_FEEDBACK,
  SEND_FEEDBACK_DEFAULT_TEXT,
  FEEDBACK_DETAIL_DESCRIPTION,
  FEEDBACK_CONTACT_POINT,
  QUEUE_MANAGE_TITLE,
  ABOUT_LYNKED,
  FEEDBACK_FORM_STAR_RATING,
  ANNOUNCEMENT_DISMISS,
  ANNOUNCEMENT_TITLE,
  CONFIRM_LOGOUT_TITLE,
  CONFIRM_LOGOUT_BODY,
  TERMS_AND_CONDS,
  TNC_BACK,
  ASSIGNED_TABLE_NUMBER,
  UPDATE_ASSIGN_TABLE_DONE,
  CURRENT_FOOD_IMAGE,
  FOOD_LONG_NAME,
  UPDATE_FOOD_DETAIL_DONE,
  DELETE_FOOD_DONE,

  BOTTOM_NAV_MENU_TEXT,
  ADD_TO_FAVOURITE

}