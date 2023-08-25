import { Box } from "@mui/material"
import Day from "../day/Day"
import Weather from '../weather/Weather'
import BigInput from "../multilineInput/MultilineInput"
import OutlinedInput from "../outlinedInput/OutlinedInput"
import UnderCaseInput from "../underCaseInput/UnderCaseInput"
import Date from "../date/Date"

function Page() {

  return (
    <Box sx={{ height: "90vh", aspectRatio: "210 / 297", backgroundColor: "#b8d0eb", display: "grid", gridTemplateColumns: "1fr 1fr", flexDirection: "column", gap: "20px", padding: "20px 20px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Day />
        <Weather />
        <BigInput title={"Gratitude"} />
        <OutlinedInput title={"Piorities"} />
      </Box>
      <Box>
        <Date />
        <UnderCaseInput title={"To DO"} />
      </Box>
    </Box>
  )
}

export default Page