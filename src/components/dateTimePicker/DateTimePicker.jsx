import { MobileTimePicker } from "@mui/x-date-pickers";
import styles from "./DateTimePicker.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setTableTime,
  setTableDate,
  setOrderedTables,
} from "../../store/features/tablesSlice/tablesSlice";

export const DateTimePicker = () => {
  const tableTime = useSelector((state) => state.tables.tableTime);
  const tableDate = useSelector((state) => state.tables.tableDate);
  console.log(tableTime, tableDate);
  const orderedTables = useSelector((state) => state.tables.orderedTables);
  console.log(orderedTables);
  const dispatch = useDispatch();

  const handleBookTable = () => {
    if (tableTime === null || tableDate === null) {
      alert("Fill both");
      return;
    } else {
      const newOrdered = {
        id: uuid(),
        time: tableTime,
        date: tableDate,
      };
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
            value={tableDate}
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

      {/* Display selected values */}
      <div>
        {orderedTables.map((entry) => (
          <div key={entry.id}>
            <p>
              {entry.time.toString()} : {entry.date.toString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
