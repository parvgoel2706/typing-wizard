import "./EndPage.css";

export default function EndPage({
  setStatus,
  setIsRunning,
  correct,
  incorrect,
  missed,
  testTime,
  words,
  recorrect,
}) {
  let handleHome = () => {
    setStatus("start");
  };
  let handleReset = () => {
    setIsRunning(true);
  };

  let accuracy =
    ((correct.current + recorrect.current / 2) /
      (correct.current +
        incorrect.current +
        missed.current +
        recorrect.current)) *
      100 || 0;

  // let WPM = (correct.current * 60) / (5 * testTime.current) || 0;
  // let WPM = Math.max(0, Math.round((words.current - (incorrect.current + missed.current) / 4)*60 / testTime.current));
  let error = incorrect.current + missed.current;
  let timeInSeconds = testTime.current;
  let WPM =
    (correct.current > error
      ? Math.round(((words.current - error / 4) * 60) / timeInSeconds)
      : Math.round((correct.current * 60) / (5 * timeInSeconds))) || 0;

  return (
    <div className="EndPage">
      <h1>Speed :- {Math.round(WPM * 10) / 10} WPM</h1>
      <h1>Accuracy :- {Math.round(accuracy * 100) / 100}%</h1>
      <h1>Test Time :- {testTime.current} secs</h1>
      <h3 className="info">Characters Statistics</h3>
      <p className="data">correct : {correct.current}</p>
      <p className="data">recorrect : {recorrect.current}</p>
      <p className="data">incorrect : {incorrect.current}</p>
      <p className="data">missed : {missed.current}</p>
      <div>
        <button onClick={handleReset}>Restart</button>
        <button onClick={handleHome}>Back to Home</button>
      </div>
    </div>
  );
}
