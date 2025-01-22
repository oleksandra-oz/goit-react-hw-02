
const Feedback = ({ optionsData, totalFeedback, positiveFeedback }) => { 
    
    return (
        <div>
            <ul>
            <li>good: {optionsData.good}</li>
            <li>neutral:{optionsData.neutral}</li>
                <li>bad:{optionsData.bad}</li>
                <li>Total:{totalFeedback}</li>
                <li>Positive:{positiveFeedback}%</li>
            </ul>
        </div>
    );
};
export default Feedback;