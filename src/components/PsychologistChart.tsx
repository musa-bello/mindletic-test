import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Paper, Typography } from "@mui/material";
import { useFeedback } from "../context/FeedbackContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PsychologistChart: React.FC = () => {
  const { feedbackData, loading, error } = useFeedback();

  if (loading) return <Typography>Loading feedback chart...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const chartData = {
    labels: feedbackData.map((item) => item.name),
    datasets: [
      {
        label: "Average Score",
        data: feedbackData.map((item) => item.score),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Psychologist Scores",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <Box component={Paper} elevation={1} p={2} mb={4}>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default PsychologistChart;
