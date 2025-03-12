import TypingText from "./TypingText";
import TimingOption from "./TimingOption";
import { useState } from "react";
import HandleMobileFocus from "./HandleMobileFocus";

export default function TypingPrac({setIsRunning,isRunning,setStatus}) {

  let [startTimer,setStartTimer] = useState(false);

  return (
    <div className="TypingPrac" style={{ marginTop:"10px",height:"60%", color: "white",display:"flex",flexDirection:"column",justifyContent:"space-evenly" }}>
      <TimingOption setIsRunning={setIsRunning} setStatus={setStatus} startTimer={startTimer} setStartTimer={setStartTimer}/>
      <TypingText isRunning={isRunning} setStartTimer={setStartTimer}/>
      {/* <input type="text" autoFocus/>*/}
      <HandleMobileFocus isRunning={isRunning}/>
    </div>
  );
}

