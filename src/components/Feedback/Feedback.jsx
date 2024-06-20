import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <div className={css.feedbackWrapper}>
        <p>
          <span className={css.heart}>❤</span> Good: {good}
        </p>
        <p>
          <span>😐</span>Neutral: {neutral}
        </p>
        <p>
          <span>😢</span>Bad: {bad}
        </p>
      </div>
      <div className={css.feedbackWrapper}>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
};
export default Feedback;