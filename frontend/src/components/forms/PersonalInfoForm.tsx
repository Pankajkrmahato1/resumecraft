import { Grid, TextField, Typography } from "@mui/material";

import { useResumeStore } from "../../store/resumeStore";

export default function PersonalInfoForm() {
  const { resume, updatePersonalInfo } = useResumeStore();

  const data = resume.personalInfo;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label="Full Name"
            fullWidth
            value={data.fullName}
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="City"
            fullWidth
            value={data.city}
            onChange={(e) => updatePersonalInfo("city", e.target.value)}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Country"
            fullWidth
            value={data.country}
            onChange={(e) => updatePersonalInfo("country", e.target.value)}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="PIN Code"
            fullWidth
            value={data.pinCode}
            onChange={(e) => updatePersonalInfo("pinCode", e.target.value)}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            label="Email"
            fullWidth
            value={data.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Phone"
            fullWidth
            value={data.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="LinkedIn"
            fullWidth
            value={data.linkedIn}
            onChange={(e) => updatePersonalInfo("linkedIn", e.target.value)}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Github"
            fullWidth
            value={data.github}
            onChange={(e) => updatePersonalInfo("github", e.target.value)}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            label="Website"
            fullWidth
            value={data.website}
            onChange={(e) => updatePersonalInfo("website", e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
}
