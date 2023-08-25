import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Date = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  // console.log(value?.format("DD"))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        defaultValue={value}
        onChange={(newValue: Dayjs | null) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};

export default Date;
