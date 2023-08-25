import { Box, TextField } from "@mui/material"

const OutlinedInput = ({ title }: { title: string }) => {

  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:"5px"}}>
      <Box>{title}</Box>
      <TextField id="outlined-basic" variant="outlined" />
      <TextField id="outlined-basic" variant="outlined" />
      <TextField id="outlined-basic" variant="outlined" />
    </Box>
  )
}

export default OutlinedInput