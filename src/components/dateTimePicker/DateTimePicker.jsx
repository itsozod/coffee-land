import { MobileTimePicker } from "@mui/x-date-pickers";
import styles from "./DateTimePicker.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, Button, Snackbar } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableTime,
  setTableDate,
  setOrderedTables,
  setTableImg,
  setTableFoodImg,
  setTableDrinkImg,
} from "../../store/features/tablesSlice/tablesSlice";
import { useSnackBar } from "../../hooks/snackBarHook/useSnackBar";

export const DateTimePicker = () => {
  const tableTime = useSelector((state) => state.tables.tableTime);
  const tableDate = useSelector((state) => state.tables.tableDate);
  const tableImg = useSelector((state) => state.tables.tableImg);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);
  console.log(tableTime, tableDate);
  const dispatch = useDispatch();
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();

  const handleClearTable = () => {
    handleCloseSnackBar();
    setTimeout(() => {
      dispatch(setTableImg(""));
      dispatch(setTableFoodImg(""));
      dispatch(setTableDrinkImg(""));
    }, 500);
  };

  const handleBookTable = () => {
    if (tableTime === null || tableDate === null) {
      alert("Fill both");
      return;
    } else if (tableDate && tableTime && !tableImg) {
      handleOpenSnackBar();
    } else {
      const newOrdered = {
        id: uuid(),
        time: tableTime,
        date: tableDate,
        tableImg: tableImg,
        tableFoodImg: tableFoodImg,
        tableDrinkImg: tableDrinkImg,
      };
      handleOpenSnackBar();
      dispatch(setOrderedTables(newOrdered));
    }
  };

  return (
    <div className={styles.date_time_container}>
      <h2>Make a reservation</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem label="Time picker">
          <MobileTimePicker
            label="Choose your time"
            sx={{ width: "220px" }}
            onChange={(newData) => {
              const timeAsDate = new Date(newData);
              const formattedTime = timeAsDate.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              });
              dispatch(setTableTime(formattedTime));
            }}
          />
        </DemoItem>
        <DemoItem label="Date picker">
          <DatePicker
            sx={{ width: "220px" }}
            label="Choose date"
            onChange={(newData) => {
              const dateAsDate = new Date(newData);
              const formattedDate = dateAsDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              dispatch(setTableDate(formattedDate));
            }}
          />
        </DemoItem>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={handleBookTable}
        >
          Book a table
        </Button>
      </LocalizationProvider>
      {tableImg ? (
        <Snackbar
          open={snackBar}
          autoHideDuration={3000}
          onClose={() => handleClearTable()}
        >
          <Alert
            onClose={() => handleClearTable()}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your table order was accepted successfully!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={snackBar}
          autoHideDuration={2000}
          onClose={() => handleCloseSnackBar()}
        >
          <Alert
            onClose={() => handleCloseSnackBar()}
            severity="error"
            sx={{ width: "100%" }}
          >
            Choose a table and dish before booking your table!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
