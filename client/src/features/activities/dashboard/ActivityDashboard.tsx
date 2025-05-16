import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import AcitivityFilters from "./AcitivityFilters";

export default function ActivityDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityList />
      </Grid>
      <Grid size={4}>
        <AcitivityFilters />
      </Grid>
    </Grid>
  );
}
