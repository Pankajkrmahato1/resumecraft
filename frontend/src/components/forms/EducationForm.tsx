import { Box, Button, TextField, Typography } from "@mui/material";
import { useResumeStore } from "../../store/resumeStore";

export default function EducationForm() {
  const { resume, addEducation, updateEducation } = useResumeStore();

  return (
    <Box mt={4}>
      <Typography variant="h6">Education</Typography>

      <Button variant="contained" onClick={addEducation} sx={{ mb: 2 }}>
        Add Education
      </Button>

      {(resume.education || []).map((edu) => (
        <Box key={edu.id} border="1px solid #ddd" p={2} mb={2}>
          <TextField
            fullWidth
            label="Institution"
            margin="normal"
            value={edu.institution}
            onChange={(e) =>
              updateEducation(edu.id, "institution", e.target.value)
            }
          />

          <TextField
            fullWidth
            label="Degree"
            margin="normal"
            value={edu.degree}
            onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
          />

          <TextField
            fullWidth
            label="Marks"
            margin="normal"
            value={edu.marks}
            onChange={(e) => updateEducation(edu.id, "marks", e.target.value)}
          />
        </Box>
      ))}
    </Box>
  );
}
