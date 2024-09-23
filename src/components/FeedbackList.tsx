import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { useFeedback } from "../context/FeedbackContext";

const FeedbackList: React.FC = () => {
  const { feedbackData, loading, error } = useFeedback();

  if (loading) return <Typography>Loading feedback...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box component={Paper} p={2}>
      <Typography variant="h6" gutterBottom>
        Feedback Summaries
      </Typography>
      <List>
        {feedbackData.map((item, index) => (
          <ListItem key={index} divider={index !== feedbackData.length - 1}>
            <ListItemText
              primary={`${item.name} - Score: ${item.score}`}
              secondary={item.feedback}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeedbackList;
