import { Box, TextField } from "@mui/material";

const UnderCaseInput = ({ title }: { title: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Box>{title}</Box>
      <TextField id="standard-basic" variant="standard" />
      <TextField id="standard-basic" variant="standard" />
      <TextField id="standard-basic" variant="standard" />
    </Box>
  );
};

export default UnderCaseInput;
