import { useState, useEffect } from "react";
import DisplayMin from "./DisplayMin";
import DisplaySec from "./DisplaySec";
import DisplayHrs from "./DisplayHrs";

export default function Timer({ initTime,isRunning }) {
  let [timeLeft, setTimeLeft] = useState(initTime);
  

  useEffect(() => {
    setTimeLeft(initTime);
  }, [initTime]);

  useEffect(() => {
    if (!isRunning) return;
    let id = setInterval(() => {
      setTimeLeft((prevVal) => {
        if (prevVal <= 1) {
          clearInterval(id);
          setIsRunning(false);
          return 0;
        }
        return prevVal - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  let startTimer = () => {
    if (!isRunning) setIsRunning(true);
  };
  
  let checkEnter = (event) => {
    if (event.key === "Enter" && !isRunning) {
      startTimer();
    }
  };

  let hrs = Math.floor(timeLeft / 3600);
  let min = Math.floor((timeLeft % 3600) / 60);
  let sec = timeLeft % 60;
  return (
    <div className="Timer">
      <DisplayHrs hour={String(hrs).padStart(2, "0")} />
      <DisplayMin minute={String(min).padStart(2, "0")} />
      <DisplaySec second={String(sec).padStart(2, "0")} />
    </div>
  );
}
