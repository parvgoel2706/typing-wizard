import "./EndPage.css";

export default function EndPage({
  setStatus,
  setIsRunning,
  info = {
    WPM: 25,
    accuracy: 97,
    correctWord: 20,
    incorrectWord: 3,
    testTime: 5,
  },
  correct,
  incorrect,
  missed,
  testTime,
}) {
  let handleHome = () => {
    setStatus("start");
  };
  let handleReset = () => {
    setIsRunning(true);
  };

  let accuracy =
    (correct.current / (correct.current + incorrect.current + missed.current)) *
      100 || 0;

  let WPM = (correct.current * 60) / (5 * testTime.current) || 0;

  return (
    <div className="EndPage">
      <h1>Speed :- {Math.round(WPM * 10) / 10} WPM</h1>
      <h1>Accuracy :- {Math.round(accuracy * 100) / 100}%</h1>
      <h1>Test Time :- {testTime.current} secs</h1>
      <h3 className="info">Characters Statistics</h3>
      <p className="data">correct : {correct.current}</p>
      <p className="data">incorrect : {incorrect.current}</p>
      <p className="data">missed : {missed.current}</p>
      <div>
        <button onClick={handleReset}>Restart</button>
        <button onClick={handleHome}>Back to Home</button>
      </div>
    </div>
  );
}
