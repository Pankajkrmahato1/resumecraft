import { Box, Paper } from "@mui/material";
import PersonalInfoForm from "../../components/forms/PersonalInfoForm";
import EducationForm from "../../components/forms/EducationForm";
import SkillsForm from "../../components/forms/SkillsForm";
import SummaryForm from "../../components/forms/SummaryForm";
import ExperienceForm from "../../components/forms/ExperienceForm";

// Changed back to a default import (no curly braces)
import ResumePreview from "../../components/preview/ResumePreview";

export default function Builder() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          p: 3,
          overflowY: "auto",
        }}
      >
        <PersonalInfoForm />
        <SummaryForm />
        <ExperienceForm />
        <EducationForm />
        <SkillsForm />
      </Paper>

      <Paper
        sx={{
          p: 3,
          background: "#e5e7eb",
          overflowY: "auto",
        }}
      >
        <ResumePreview />
      </Paper>
    </Box>
  );
}
