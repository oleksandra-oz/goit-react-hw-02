const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      {feedbackOptions.map((option) => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
