import { useState } from "react";
// import { Box } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Day() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "It's beautifyl day!",
  ];
  const d = new Date();

  const [day, setDay] = useState(weekdays[d.getDay()]);

  const handleChange = (event: SelectChangeEvent) => {
    if ((event.target.value as string) !== "Add other")
      setDay(event.target.value as string);
    // else
  };

  return (
    <Select id="day-select" value={day} onChange={handleChange}>
      {weekdays.map((weekday) => (
        <MenuItem key={"day" + weekday.toString()} value={weekday}>
          {weekday}
        </MenuItem>
      ))}
      <MenuItem value={"Add other"}>{"Add other"}</MenuItem>
    </Select>
  );
}

export default Day;
