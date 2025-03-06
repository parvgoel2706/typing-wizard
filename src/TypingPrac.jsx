import TypingText from "./TypingText";
import TimingOption from "./TimingOption";
import { useState } from "react";

export default function TypingPrac({setIsRunning,isRunning,setStatus}) {

  let [startTimer,setStartTimer] = useState(false);
  let changeStart = (timerStatus)=>{
    setStartTimer(timerStatus);
  }

  return (
    <div className="TypingPrac" style={{ marginTop:"10px",height:"75%", color: "white",display:"flex",flexDirection:"column",justifyContent:"space-evenly" }}>
      <TimingOption setIsRunning={setIsRunning} setStatus={setStatus} startTimer={startTimer} setStartTimer={setStartTimer}/>
      <TypingText isRunning={isRunning} changeStart={changeStart}/>
    </div>
  );
}

