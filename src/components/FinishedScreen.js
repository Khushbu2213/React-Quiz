import { useQuiz } from "../contexts/QuizContext";

function FinishedScreen() {
  const { dispatch, points, maxPossiblePoints, highscore } = useQuiz()

  const per = (points / maxPossiblePoints) * 100;

  let emoji;
  if (per === 100) emoji = "🥇";
  if (per >= 80 && per < 100) emoji = "🥈";
  if (per >= 50 && per < 80) emoji = "🥉";
  if (per >= 0 && per < 50) emoji = "🏅";
  if (per === 0) emoji = "😑";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(per)})%
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
