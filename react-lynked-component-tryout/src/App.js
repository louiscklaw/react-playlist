import logo from "./logo.svg";
import "./App.css";

import { Box } from "@material-ui/core";

import AddCategoryButton from "./components/AddCategoryButton";
import AddFoodItemButton from "./components/AddFoodItemButton";
import AddNewCategoryDialog from "./components/AddNewCategoryDialog";
import AlertDialogSlide from "./components/AlertDialogSlide";
import AssignedTableListCard from "./components/AssignedTableListCard";
import AssignTableDialog from "./components/AssignTableDialog";
import BillDetailDialog from "./components/BillDetailDialog";
import BillingManagementCard from "./components/BillingManagementCard";
import ConfirmDeleteDialog from "./components/ConfirmDeleteDialog";
import FoodDetailDialog from "./components/FoodDetailDialog";
import HelpRequestCard from "./components/HelpRequestCard";
import HelpRequestsTable from "./components/HelpRequestsTable";
import ReceptionListCard from "./components/ReceptionListCard";
import ReservationRequestCard from "./components/ReservationRequestCard";
import SearchInput from "./components/SearchInput";

function App() {
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

export default App;
