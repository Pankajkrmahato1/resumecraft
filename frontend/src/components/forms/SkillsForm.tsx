import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";

import { useState } from "react";

import { useResumeStore } from "../../store/resumeStore";

export default function SkillsForm() {
  const { resume, addSkill, removeSkill } = useResumeStore();

  const [skill, setSkill] = useState("");

  return (
    <Box mt={4}>
      <Typography variant="h6">Skills</Typography>

      <Box display="flex" gap={2} mt={2}>
        <TextField
          fullWidth
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={() => {
            addSkill(skill);
            setSkill("");
          }}
        >
          Add
        </Button>
      </Box>

      <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
        {(resume.skills || []).map((s) => (
          <Chip key={s} label={s} onDelete={() => removeSkill(s)} />
        ))}
      </Stack>
    </Box>
  );
}
