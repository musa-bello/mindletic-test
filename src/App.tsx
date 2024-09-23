import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { FeedbackProvider } from "./context/FeedbackContext";
import PsychologistChart from "./components/PsychologistChart";
import FeedbackList from "./components/FeedbackList";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FeedbackProvider>
        <Container maxWidth="md">
          <Box my={4}>
            <Box display="flex" justifyContent="center" width="100%">
              <Typography
                variant="h4"
                component="h1"
                align="center"
                gutterBottom
              >
                Psychologist Feedback Dashboard
              </Typography>
            </Box>
            <PsychologistChart />
            <FeedbackList />
          </Box>
        </Container>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App;
