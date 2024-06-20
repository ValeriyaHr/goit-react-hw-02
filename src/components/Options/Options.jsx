import css from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, handleClick }) => {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={() => updateFeedback("good")} className={css.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={css.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={css.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleClick} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;