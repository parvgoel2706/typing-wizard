import { useState } from "react";
import TimeSelect from "./TimeSelect";
import Timer from "./Timer";
import "./TimingOption.css";
import DifficultySelect from "./DifficultySelect";

export default function TimeOption({
  setIsRunning,
  setStatus,
  startTimer,
  setStartTimer,
  testTime,
  setDifficulty,
}) {
  let [initialTime, setInitialTime] = useState();

  let setInitial = (time) => {
    setInitialTime(time);
    testTime.current = time;
  };

  return (
    <div className="TimeOption">
      {!startTimer && <TimeSelect setInitial={setInitial} />}
      {!startTimer && (
        <DifficultySelect
          setInitial={setInitial}
          setDifficulty={setDifficulty}
        />
      )}
      <Timer
        initTime={initialTime}
        setIsRunning={setIsRunning}
        setStatus={setStatus}
        setStartTimer={setStartTimer}
        startTimer={startTimer}
      />
    </div>
  );
}
