import { Grid } from "@mui/material";

export default function PageContainer(props) {
  return (
    <Grid
      container
      direction="column"
      flexWrap="nowrap"
      justifyContent="flex-start"
      alignItems="stretch"
      position="fixed"
      height="-webkit-fill-available"
      spacing={2}
      bgcolor="background.default"
      color="text.primary"
      sx={{
        overflowY: "auto",
      }}
    >
      {props.children}
    </Grid>
  );
}
