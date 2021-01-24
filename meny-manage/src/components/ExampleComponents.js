import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

import { Box } from "@material-ui/core";

import AddCategoryButton from "src/components/AddCategoryButton";
import AddFoodItemButton from "src/components/AddFoodItemButton";
import AddNewCategoryDialog from "src/components/AddNewCategoryDialog";
import AlertDialogSlide from "src/components/AlertDialogSlide";
import AssignedTableListCard from "src/components/AssignedTableListCard";
import AssignTableDialog from "src/components/AssignTableDialog";
import BillDetailDialog from "src/components/BillDetailDialog";
import BillingManagementCard from "src/components/BillingManagementCard";
import ConfirmDeleteDialog from "src/components/ConfirmDeleteDialog";
import FoodDetailDialog from "src/components/FoodDetailDialog";
import HelpRequestCard from "src/components/HelpRequestCard";
import HelpRequestsTable from "src/components/HelpRequestsTable";
import ReceptionListCard from "src/components/ReceptionListCard";
import ReservationRequestCard from "src/components/ReservationRequestCard";
import SearchInput from "src/components/SearchInput";

import ReceptionList from "src/components/ReceptionList";
import AssignedTablesList from "src/components/AssignedTablesList";
import HelpRequestedShortList from "src/components/HelpRequestedShortList";
import ReservationRequestedShortList from "src/components/ReservationRequestedShortList";
import SimpleStats from "src/components/SimpleStats";
import OrderTable from "src/components/OrderTable";
import ViewHistoryButton from "src/components/ViewHistoryButton";

export default function ExampleComponents() {
  return (
    <div className="App">
      <Box m="1rem">
        <ViewHistoryButton />
      </Box>
      <Box style={{ padding: "0px", margin: "0px" }}>
        <Box m="1rem" style={{ width: "95vw" }}>
          <Box>OrderTable</Box>
          <OrderTable />
        </Box>
        <Box m="1rem" style={{ width: "50vw" }}>
          <Box>SimpleStats</Box>
          <SimpleStats />
        </Box>

        <Box m="1rem" style={{ width: "50vw" }}>
          <Box>ReservationRequestedShortList</Box>
          <ReservationRequestedShortList />
        </Box>

        <Box m="1rem" style={{ width: "50vw" }}>
          <Box>HelpRequestedShortList</Box>
          <HelpRequestedShortList />
        </Box>

        <Box m="1rem">
          <Box>AssignedTablesList</Box>
          <AssignedTablesList />
        </Box>

        <Box m="1rem">
          <Box>ReceptionList</Box>
          <ReceptionList />
        </Box>

        <Box m="1rem">
          <AddFoodItemButton />
        </Box>
        <Box m="1rem">
          <AddCategoryButton />
        </Box>
        <Box m="1rem">
          <Box>AddNewCateogryDialog</Box>
          <AddNewCategoryDialog />
        </Box>
        <Box m="1rem">
          <ConfirmDeleteDialog />
        </Box>
        <Box m="1rem">
          <FoodDetailDialog />
        </Box>
        <Box m="1rem">
          <BillDetailDialog />
        </Box>
        <Box m="1rem">
          <BillingManagementCard />
        </Box>
        <Box m="1rem">
          <Box>SearchInput</Box>
          <SearchInput />
        </Box>
        <Box m="1rem">
          <HelpRequestsTable />
        </Box>
        <Box m="1rem">
          <ReservationRequestCard />
        </Box>

        <Box m="1rem">
          <Box>ReceptionListCard</Box>
          <ReceptionListCard />
        </Box>
        <Box m="1rem">
          <Box>AssignedTableListCard</Box>
          <AssignedTableListCard />
        </Box>
        <Box m="1rem">
          <HelpRequestCard />
        </Box>
        <Box m="1rem">
          <AssignTableDialog />
        </Box>

        <AlertDialogSlide />
      </Box>
    </div>
  );
}
