import './App.css';
import Description from '../description/Description.jsx';
import Options from '../options/Options.jsx';
import Feedback from '../feedback/Feedback.jsx';
import Notification from '../notification/Notification.jsx';
import { useState, useEffect } from 'react';

function App() {
  // Ініціалізація стану з локального сховища або 0, якщо немає даних в сховищі
  const initialState = JSON.parse(localStorage.getItem('feedbackData')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [optionsData, setOptionsData] = useState(initialState);

  // Обчислення загальної кількості відгуків
  const totalFeedback = optionsData.good + optionsData.neutral + optionsData.bad;

  // Обчислення відсотка позитивних відгуків
  const positiveFeedback = totalFeedback > 0 ? Math.round((optionsData.good / totalFeedback) * 100) : 0;

  // Функція для оновлення відгуків
  const updateFeedback = (feedbackType) => {
    setOptionsData((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  // Функція для скидання відгуків
  const resetFeedback = () => {
    setOptionsData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Записуємо стан в локальне сховище при кожній зміні
  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(optionsData));
  }, [optionsData]); // цей ефект спрацьовує при кожній зміні optionsData

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback} // передаємо функцію для оновлення відгуків
        resetFeedback={resetFeedback} // передаємо функцію для скидання відгуків
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
