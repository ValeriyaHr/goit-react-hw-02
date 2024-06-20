import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const [reviewsNumber, setReviewsNumber] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews-number");
    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem(
      "saved-reviews-number",
      JSON.stringify(reviewsNumber)
    );
  }, [reviewsNumber]);

  const updateFeedback = (feedbackType) => {
    setReviewsNumber({
      ...reviewsNumber,
      [feedbackType]: reviewsNumber[feedbackType] + 1,
    });
  };
  const totalFeedback =
    reviewsNumber.good + reviewsNumber.neutral + reviewsNumber.bad;
  const positiveFeedback = Math.round(
    (reviewsNumber.good / totalFeedback) * 100
  );
  const handleClick = () => {
    setReviewsNumber({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleClick={handleClick}
      />
      {totalFeedback > 0 ? (
        <Feedback
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
          good={reviewsNumber.good}
          neutral={reviewsNumber.neutral}
          bad={reviewsNumber.bad}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </div>
  );
}