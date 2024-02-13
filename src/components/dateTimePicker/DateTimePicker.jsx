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
import { useSnackBar } from "../../hooks/snackBarHook/UseSnackBar";
import { useState } from "react";

export const DateTimePicker = () => {
  const tableTime = useSelector((state) => state.tables.tableTime);
  const tableDate = useSelector((state) => state.tables.tableDate);
  const tableImg = useSelector((state) => state.tables.tableImg);
  const tableFoodImg = useSelector((state) => state.tables.tableFoodImg);
  const tableDrinkImg = useSelector((state) => state.tables.tableDrinkImg);
  console.log(tableTime, tableDate);
  const dispatch = useDispatch();
  const [snackBar, handleOpenSnackBar, handleCloseSnackBar] = useSnackBar();
  const [timeValidation, setTimeValidation] = useState(false);
  const [dateValidation, setDateValidation] = useState(false);
  const loggedIn = useSelector((state) => state.signin.loggedIn);
  console.log("Logged in Booking", loggedIn);

  const handleClearTable = () => {
    handleCloseSnackBar();
    setTimeout(() => {
      dispatch(setTableImg(""));
      dispatch(setTableFoodImg(""));
      dispatch(setTableDrinkImg(""));
      dispatch(setTableTime(null));
      dispatch(setTableDate(null));
    }, 500);
  };

  const handleBookTable = () => {
    // if (!loggedIn) {
    //   console.log("Log in before booking!");
    //   // alert("Log in before booking!");
    //   return;
    // }
    if (tableTime === null) {
      setTimeValidation(true);
    } else {
      setTimeValidation(false);
    }

    if (tableDate === null) {
      setDateValidation(true);
    } else {
      setDateValidation(false);
    }

    // Check if tableImg is falsy
    if (!loggedIn || !tableImg || tableTime === null || tableDate === null) {
      handleOpenSnackBar();
    } else {
      // Booking logic
      const newOrdered = {
        id: uuid(),
        time: tableTime,
        date: tableDate,
        tableImg: tableImg,
        tableFoodImg: tableFoodImg,
        tableDrinkImg: tableDrinkImg,
      };
      handleOpenSnackBar(); // Show success Snackbar
      dispatch(setOrderedTables(newOrdered));
    }
  };

  return (
    <div className={styles.date_time_container}>
      <h2 style={{ marginBottom: "10px" }}>Make a reservation</h2>
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
          <p style={{ color: "red" }}>{timeValidation && "*Choose a time"}</p>
        </DemoItem>
        <div className={styles.date_picker}>
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
            <p style={{ color: "red" }}>{dateValidation && "*Choose a date"}</p>
          </DemoItem>
        </div>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={handleBookTable}
        >
          Book a table
        </Button>
      </LocalizationProvider>

      {loggedIn && tableImg && tableDate !== null && tableTime !== null ? (
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
            {loggedIn
              ? "Choose a table before booking your table!"
              : "Log in to book a table"}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
