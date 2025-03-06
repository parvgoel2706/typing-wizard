import { useEffect, useState } from "react";
import TimeSelect from "./TimeSelect";
import Timer from "./Timer";

export default function TimeOption({
  setIsRunning,
  setStatus,
  startTimer,
  setStartTimer,
}) {
  let [initialTime, setInitialTime] = useState();

  let setInitial = (time) => {
    setInitialTime(time);
  };

  let styles = {
    backgroundColor: "blue",
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  return (
    <div className="TimeOption" style={styles}>
      <TimeSelect setInitial={setInitial} />
      
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
