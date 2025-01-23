const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      {/* Кнопки для збору відгуків */}
      {feedbackOptions.map((option) => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}

      {/* Кнопка скидання відгуків видима лише, якщо є хоча б один відгук */}
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
