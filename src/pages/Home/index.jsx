import { Grid } from "@mui/material";
import HomeNavigation from "./container/HomeNavigation.jsx";
import PageContainer from "../../components/PageContainer.jsx";
import BackgroundBox from "../../components/BackgroundBox.jsx";

export default function Home() {
  return (
    <PageContainer>
      <Grid item display="inline-flex" justifyContent="center" marginTop="5vh">
        <BackgroundBox />
      </Grid>
      <Grid item display="inline-flex" justifyContent="center">
        <HomeNavigation />
      </Grid>
    </PageContainer>
  );
}
