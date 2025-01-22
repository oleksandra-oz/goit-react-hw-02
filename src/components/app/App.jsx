import './App.css'
import Description from '../description/Description.jsx'
import Options from '../options/Options.jsx'
import Feedback from '../feedback/Feedback.jsx'
import Notification from '../notification/Notification.jsx'
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
  
  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(optionsData));
  }, [optionsData]);
  
  return (
    <>
      <Description />
      <Options
        setOptionsData={setOptionsData}
        optionsData={optionsData}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          optionsData={optionsData}
        totalFeedback={totalFeedback} 
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
