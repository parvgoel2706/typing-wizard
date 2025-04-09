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
}) {
  let handleHome = () => {
    setStatus("start");
  };
  let handleReset = () => {
    setIsRunning(true);
  };

  return (
    <div className="EndPage">
      <h2>Data(WPM and accuracy) will be displayed here</h2>
      <button onClick={handleReset}>Restart</button>
      <button onClick={handleHome}>Back to Home</button>
    </div>
  );
}
