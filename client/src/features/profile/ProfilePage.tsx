import { Grid, Typography } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";

export default function ProfilePage() {
  const { id } = useParams();

  const { profile, loadingProfile } = useProfile(id);

  if (loadingProfile) return <Typography>Loading Profile...</Typography>;

  if (!profile) return <Typography>Profile is not found</Typography>;

  return (
    <Grid container>
      <Grid size={12}>
        <ProfileHeader />
        <ProfileContent />
      </Grid>
    </Grid>
  );
}
