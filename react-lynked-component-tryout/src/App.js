import logo from "./logo.svg";
import "./App.css";

import { Box } from "@material-ui/core";

import AssignTableDialog from "./AssignTableDialog";
import AlertDialogSlide from "./AlertDialogSlide";
import AssignedTableListCard from "./AssignedTableListCard";
import HelpRequestCard from "./HelpRequestCard";
import ReceptionListCard from "./ReceptionListCard";
import ReservationRequestCard from "./ReservationRequestCard";

function App() {
  return (
    <div className="App">
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
