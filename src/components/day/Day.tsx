import {Box} from "@mui/material"

function Day() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  const day = weekday[d.getDay()];
  return (
    <Box>It's {day}!</Box>
  )
}

export default Day