import { Box, TextField } from "@mui/material"

const MultilineInput = ({ title }: { title: string }) => {

  return (
    <Box sx={{display:"flex", flexDirection:"column", width:"70%", margin:"0 20px"}}>
      <Box>{title}</Box>
      <TextField
          id="outlined-multiline-static"
          // label="No label"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
    </Box>
  )
}

export default MultilineInput