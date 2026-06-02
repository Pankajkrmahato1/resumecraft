import { Typography, TextField } from "@mui/material";

import { useResumeStore } from "../../store/resumeStore";

export default function SummaryForm() {
  const { resume, updateSummary } = useResumeStore();

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Professional Summary
      </Typography>

      <TextField
        multiline
        rows={6}
        fullWidth
        value={resume.summary}
        onChange={(e) => updateSummary(e.target.value)}
      />
    </>
  );
}
