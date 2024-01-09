import { MobileTimePicker } from "@mui/x-date-pickers";
import styles from "./DateTimePicker.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const DateTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeNDate, setTimeNDate] = useState([]);

  const handleBookTable = () => {
    // Perform any actions you need with the selected time and date
    if (selectedTime === null || selectedDate === null) {
      alert("Fill both");
      return;
    }
    const newObj = {
      id: uuid(),
      time: selectedTime,
      date: selectedDate,
    };
    setTimeNDate((prevDates) => [...prevDates, newObj]);
    // You can update the state, dispatch an action, etc. based on your logic
  };

  return (
    <div className={styles.date_time_container}>
      <h2>Make a reservation</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem label="Time picker">
          <MobileTimePicker
            label="Choose your time"
            sx={{ width: "220px" }}
            value={selectedTime}
            onChange={(newTime) => setSelectedTime(newTime)}
          />
        </DemoItem>
        <DemoItem label="Date picker">
          <DatePicker
            sx={{ width: "220px" }}
            label="Choose date"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
        </DemoItem>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={handleBookTable}
        >
          Book
        </Button>
      </LocalizationProvider>

      {/* Display selected values */}
      <div>
        {timeNDate.map((entry) => (
          <div key={entry.id}>
            <p>
              {entry.time && entry.time.toString()} :{" "}
              {entry.date && entry.date.toString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
