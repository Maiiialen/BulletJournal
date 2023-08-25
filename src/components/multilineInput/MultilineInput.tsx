import { Box, TextField } from "@mui/material";

const MultilineInput = ({ title }: { title: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>{title}</Box>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </Box>
  );
};

export default MultilineInput;
