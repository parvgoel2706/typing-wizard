import TypingText from "./TypingText";
import TimingOption from "./TimingOption";
import { useState, useEffect } from "react";
import HandleMobileFocus from "./HandleMobileFocus";

export default function TypingPrac({
  setIsRunning,
  isRunning,
  setStatus,
  correct,
  incorrect,
  missed,
  testTime,
  words,
  recorrect,
}) {
  let [startTimer, setStartTimer] = useState(false);
  let [difficulty, setDifficulty] = useState(0);
  return (
    <div className="TypingPrac" style={{ color: "white" }}>
      <TimingOption
        setIsRunning={setIsRunning}
        setStatus={setStatus}
        startTimer={startTimer}
        setStartTimer={setStartTimer}
        testTime={testTime}
        setDifficulty={setDifficulty}
      />
      <TypingText
        isRunning={isRunning}
        setStartTimer={setStartTimer}
        correct={correct}
        incorrect={incorrect}
        missed={missed}
        words={words}
        recorrect={recorrect}
        difficulty={difficulty}
      />
      {screen.width < 650 ? (
        <>
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "1rem" }}>
            Disclaimer: This experience may not function as intended on mobile
            devices. For optimal performance, please access it on a desktop or
            laptop computer.
          </p>
          <HandleMobileFocus isRunning={isRunning} />
        </>
      ) : null}
    </div>
  );
}
