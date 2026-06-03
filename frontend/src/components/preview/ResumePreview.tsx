import { Box, Divider, Typography } from "@mui/material";

import { useResumeStore } from "../../store/resumeStore";

export default function ResumePreview() {
  const { resume } = useResumeStore();

  return (
    <Box
      sx={{
        background: "white",
        p: 4,
        minHeight: "100%",
      }}
    >
      <Typography variant="h3" fontWeight={700}>
        <Typography color="text.secondary">
          {resume.personalInfo.city}
          {resume.personalInfo.city && resume.personalInfo.country ? ", " : ""}
          {resume.personalInfo.country}
        </Typography>
        {resume.personalInfo.fullName}
      </Typography>

      <Typography>{resume.personalInfo.email}</Typography>

      <Typography>{resume.personalInfo.phone}</Typography>
      {resume.personalInfo.linkedIn && (
        <Typography>
          LinkedIn:
          {resume.personalInfo.linkedIn}
        </Typography>
      )}

      {resume.personalInfo.github && (
        <Typography>
          GitHub:
          {resume.personalInfo.github}
        </Typography>
      )}

      {resume.personalInfo.website && (
        <Typography>
          Website:
          {resume.personalInfo.website}
        </Typography>
      )}

      <Divider sx={{ my: 2 }} />

      {resume.summary && (
        <>
          <Typography variant="h6">Summary</Typography>

          <Typography>{resume.summary}</Typography>

          <Divider sx={{ my: 2 }} />
        </>
      )}

      {(resume.experiences || []).length > 0 && (
        <>
          <Typography variant="h6">Experience</Typography>

          {resume.experiences.map((exp) => (
            <Box key={exp.id} mt={2}>
              <Typography fontWeight={700}>{exp.jobTitle}</Typography>

              <Typography>{exp.employer}</Typography>

              <Typography variant="body2">
                {exp.startDate}

                {" - "}

                {exp.currentlyWorking ? "Present" : exp.endDate}
              </Typography>

              <Typography>{exp.description}</Typography>
            </Box>
          ))}
          {(resume.education || []).length > 0 && (
            <>
              <Divider sx={{ my: 2 }} />

              <Typography variant="h6">Education</Typography>

              {resume.education.map((edu) => (
                <Box key={edu.id} mt={2}>
                  <Typography fontWeight={700}>{edu.degree}</Typography>

                  <Typography>{edu.institution}</Typography>

                  <Typography>{edu.marks}</Typography>
                </Box>
              ))}
            </>
          )}
          {(resume.skills || []).length > 0 && (
            <>
              <Divider sx={{ my: 2 }} />

              <Typography variant="h6">Skills</Typography>

              <Typography>{resume.skills.join(", ")}</Typography>
            </>
          )}
        </>
      )}
    </Box>
  );
}
