import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <div className={css.feedbackWrapper}>
        <p>
          Good: {good}
        </p>
        <p>
          Neutral: {neutral}
        </p>
        <p>
          Bad: {bad}
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