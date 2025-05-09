import OverlayMain from "./OverlayMain";
import OverlayBack from "./OverlayBack";

export default function Popup({
  isRunning,
  setIsRunning,
  Status,
  setStatus,
  correct,
  incorrect,
  missed,
  testTime,
  words,
  recorrect,
}) {
  return (
    <div className="PopupBox">
      <OverlayBack isRunning={isRunning} />
      <OverlayMain
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        Status={Status}
        setStatus={setStatus}
        correct={correct}
        incorrect={incorrect}
        missed={missed}
        testTime={testTime}
        words={words}
        recorrect={recorrect}
      />
    </div>
  );
}
