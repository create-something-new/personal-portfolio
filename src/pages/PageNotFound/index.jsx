import { Box, Grid, Typography } from "@mui/material";

export default function PageNotFound() {
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
      <Grid item display="inline-flex" justifyContent="center" alignItems="center">
        <Box display="inline-flex" justifyContent="center" alignItems="center">
          <img src="/page_not_found.svg" alt="404" width="75%" />
        </Box>
      </Grid>
      <Grid item display="inline-flex" justifyContent="center" alignItems="center">
        <Typography fontSize="3.8vh">404 PAGE NOT FOUND!</Typography>
      </Grid>
    </Grid>
  );
}
