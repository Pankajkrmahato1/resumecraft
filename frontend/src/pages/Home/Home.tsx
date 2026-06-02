import { Box, Button, Typography, Container } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          ResumeCraft
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Build professional resumes in minutes.
        </Typography>

        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/builder")}
        >
          Create Resume
        </Button>
      </Box>
    </Container>
  );
}
