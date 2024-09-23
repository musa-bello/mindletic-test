import React, { createContext, useState, useEffect, useContext } from "react";

interface Feedback {
  name: string;
  score: number;
  feedback: string;
}

interface FeedbackContextType {
  feedbackData: Feedback[];
  loading: boolean;
  error: string | null;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
};

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockData: Feedback[] = [
          {
            name: "Dr. John Smith",
            score: 4.5,
            feedback: "Very empathetic and insightful.",
          },
          {
            name: "Dr. Jane Doe",
            score: 4.2,
            feedback: "Professional but could be more engaging.",
          },
          {
            name: "Dr. Emily Brown",
            score: 4.8,
            feedback: "Excellent listener and problem-solver.",
          },
          {
            name: "Dr. Michael Green",
            score: 4.0,
            feedback: "Knowledgeable but sessions feel rushed.",
          },
          {
            name: "Dr. Sarah White",
            score: 4.7,
            feedback: "Compassionate and highly skilled.",
          },
        ];
        setFeedbackData(mockData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch feedback data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FeedbackContext.Provider value={{ feedbackData, loading, error }}>
      {children}
    </FeedbackContext.Provider>
  );
};
