import logo from "./logo.svg";
import "./App.css";

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

export default function Example() {
  return (
    <div className="App">
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
    </div>
  );
}
