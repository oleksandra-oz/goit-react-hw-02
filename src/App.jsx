import './App.css';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';
import { useState, useEffect } from 'react';

function App() {
  const initialState = JSON.parse(localStorage.getItem('feedbackData')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [optionsData, setOptionsData] = useState(initialState);

  const totalFeedback = optionsData.good + optionsData.neutral + optionsData.bad;

  
  const positiveFeedback = totalFeedback > 0 ? Math.round((optionsData.good / totalFeedback) * 100) : 0;

  
  const updateFeedback = (feedbackType) => {
    setOptionsData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };


  const resetFeedback = () => {
    setOptionsData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(optionsData));
  }, [optionsData]); 
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback > 0 ? (
        <Feedback 
          optionsData={optionsData} 
          totalFeedback={totalFeedback} 
          positiveFeedback={positiveFeedback} 
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
