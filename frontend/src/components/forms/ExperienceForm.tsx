import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useResumeStore } from "../../store/resumeStore";

export default function ExperienceForm() {
  const { resume, addExperience, updateExperience, deleteExperience } =
    useResumeStore();
  return (
    <>
      <Box mt={4}>
        <Typography variant="h6">Work Experience</Typography>

        <Button sx={{ mb: 2 }} variant="contained" onClick={addExperience}>
          Add Experience
        </Button>

        {(resume.experiences || []).map((exp) => (
          <Box
            key={exp.id}
            mb={4}
            p={2}
            border="1px solid #ddd"
            borderRadius={2}
          >
            <TextField
              fullWidth
              label="Job Title"
              margin="normal"
              value={exp.jobTitle}
              onChange={(e) =>
                updateExperience(exp.id, "jobTitle", e.target.value)
              }
            />

            <TextField
              fullWidth
              label="Employer"
              margin="normal"
              value={exp.employer}
              onChange={(e) =>
                updateExperience(exp.id, "employer", e.target.value)
              }
            />

            <TextField
              fullWidth
              label="Start Date"
              margin="normal"
              value={exp.startDate}
              onChange={(e) =>
                updateExperience(exp.id, "startDate", e.target.value)
              }
            />

            <TextField
              fullWidth
              label="End Date"
              margin="normal"
              value={exp.endDate}
              onChange={(e) =>
                updateExperience(exp.id, "endDate", e.target.value)
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={exp.currentlyWorking}
                  onChange={(e) =>
                    updateExperience(
                      exp.id,
                      "currentlyWorking",
                      e.target.checked,
                    )
                  }
                />
              }
              label="Currently Working"
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={exp.description}
              onChange={(e) =>
                updateExperience(exp.id, "description", e.target.value)
              }
            />
            <Box display="flex" justifyContent="flex-end">
              <IconButton onClick={() => deleteExperience(exp.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
