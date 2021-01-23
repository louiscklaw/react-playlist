import logo from "./logo.svg";
import "./App.css";

import { Box } from "@material-ui/core";

import AssignTableDialog from "./AssignTableDialog";
import AlertDialogSlide from "./AlertDialogSlide";
import AssignedTableListCard from "./AssignedTableListCard";
import HelpRequestCard from "./HelpRequestCard";
import ReceptionListCard from "./ReceptionListCard";
import ReservationRequestCard from "./ReservationRequestCard";
import HelpRequestsTable from "./HelpRequestsTable";
import SearchInput from "./SearchInput";
import BillingManagementCard from "./BillingManagementCard";
import BillDetailDialog from "./BillDetailDialog";
import FoodDetailDialog from "./FoodDetailDialog";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import AddNewCategoryDialog from "./AddNewCategoryDialog";

function App() {
  return (
    <div className="App">
      <Box m="1rem">
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
        <ReceptionListCard />
      </Box>
      <Box m="1rem">
        <AssignedTableListCard />
      </Box>
      <Box m="1rem">
        <HelpRequestCard />
      </Box>
      <AssignTableDialog />
      <AlertDialogSlide />
    </div>
  );
}

export default App;
