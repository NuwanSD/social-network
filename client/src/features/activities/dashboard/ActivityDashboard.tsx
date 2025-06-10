import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import AcitivityFilters from "./AcitivityFilters";

export default function ActivityDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityList />
      </Grid>
      <Grid
        size={4}
        sx={{ position: "sticky", top: 112, alignSelf: "flex-start" }}
      >
        <AcitivityFilters />
      </Grid>
    </Grid>
  );
}
