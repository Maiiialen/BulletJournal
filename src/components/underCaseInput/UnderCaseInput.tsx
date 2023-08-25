import { Box, TextField } from "@mui/material"

const UnderCaseInput = ({ title }: { title: string }) => {

  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"70%", gap:"5px", margin:"0 20px"}}>
      <Box>{title}</Box>
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <TextField id="standard-basic" variant="standard" />
      <TextField id="standard-basic" variant="standard" />
      <TextField id="standard-basic" variant="standard" />
    </Box>
  )
}

export default UnderCaseInput