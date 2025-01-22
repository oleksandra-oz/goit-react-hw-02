const Options = ({ setOptionsData, optionsData, totalFeedback }) => {

const updateFeedback = (feedbackType) => {
        setOptionsData((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setOptionsData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

    const btnsOptions = Object.keys(optionsData);

    return (
        <div>
            {btnsOptions.map((option) => (
                <button key={option} onClick={() => updateFeedback(option)}>
                    {option}
                </button>
            ))}

            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>)}
        </div>
    );
};

export default Options;
