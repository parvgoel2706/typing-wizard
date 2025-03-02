import { useState } from "react";
import TimeSelect from "./TimeSelect";
import Timer from "./Timer";

export default function TimeOption({isRunning}) {
  let [initialTime , setInitialTime] = useState("10");
  
  let setInitial = (time)=>{
    setInitialTime(time);
  }

  let styles = { backgroundColor: "blue" ,height:"50px",width:"100%", display:"flex",justifyContent:"space-evenly",alignItems:"center"};

  return <div className="TimeOption" style={styles}>
    <TimeSelect setInitial = {setInitial}/>
    <Timer initTime={initialTime} isRunning={isRunning}/>
  </div>;
}
