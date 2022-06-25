import { Box, Paper, Stack, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.secondary.contrastText,
  "&:hover": { cursor: "pointer" },
}));

export default function HomeNavigation() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </Stack>
    </Box>
  );
}
