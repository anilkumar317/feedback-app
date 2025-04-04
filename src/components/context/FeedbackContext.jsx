import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext({});

export const FeedbackProvieder = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/feedback?_sort=id&_oreder=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // FeedbackItem to be Added
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback?_sort=id&_oreder=desc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // FeedbackItem to be upadeted
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // FeedbackItem to be deleted
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // FeedbackItem to be Updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
