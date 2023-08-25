import { Box, TextField } from "@mui/material"

const OutlinedInput = ({ title }: { title: string }) => {

  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"70%", gap:"5px", margin:"0 20px"}}>
      <Box>{title}</Box>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="outlined-basic" variant="outlined" />
      <TextField id="outlined-basic" variant="outlined" />
      <TextField id="outlined-basic" variant="outlined" />
    </Box>
  )
}

export default OutlinedInput