import TypingText from "./TypingText";
import TimingOption from "./TimingOption";
import { useState, useEffect } from "react";
import HandleMobileFocus from "./HandleMobileFocus";

export default function TypingPrac({ setIsRunning, isRunning, setStatus }) {
  let [startTimer, setStartTimer] = useState(false);
  return (
    <div className="TypingPrac" style={{ color: "white" }}>
      <TimingOption
        setIsRunning={setIsRunning}
        setStatus={setStatus}
        startTimer={startTimer}
        setStartTimer={setStartTimer}
      />
      <TypingText isRunning={isRunning} setStartTimer={setStartTimer} />
      <p style={{color:"red"}}>"Disclaimer: This experience may not function as intended on mobile devices. For optimal performance, please access it on a desktop or laptop computer."</p>
      {screen.width < 650 && <HandleMobileFocus isRunning={isRunning} />}
    </div>
  );
}
