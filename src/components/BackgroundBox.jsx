import { Box } from "@mui/material";

export default function BackgroundBox(props) {
  return (
    <Box
      sx={{
        width: "93vw",
        height: "60vh",
        backgroundColor: "common.white",
        "&:hover": {},
        borderRadius: "4vh",
      }}
    >
      {props.children}
    </Box>
  );
}
