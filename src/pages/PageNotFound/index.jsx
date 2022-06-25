import { Box, Grid, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer.jsx";

export default function PageNotFound() {
  return (
    <PageContainer>
      <Grid item display="inline-flex" justifyContent="center" alignItems="center">
        <Box display="inline-flex" justifyContent="center" alignItems="center">
          <img src="/page_not_found.svg" alt="404" width="75%" />
        </Box>
      </Grid>
      <Grid item display="inline-flex" justifyContent="center" alignItems="center">
        <Typography fontSize="3.8vh">404 PAGE NOT FOUND!</Typography>
      </Grid>
    </PageContainer>
  );
}
