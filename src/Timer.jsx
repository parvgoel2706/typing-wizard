import { useState, useEffect } from "react";
import DisplayMin from "./DisplayMin";
import DisplaySec from "./DisplaySec";
import DisplayHrs from "./DisplayHrs";

export default function Timer({
  initTime,
  setIsRunning,
  setStatus,
  startTimer,
  setStartTimer,
}) {
  let [timeLeft, setTimeLeft] = useState(initTime);

  useEffect(() => {
    setTimeLeft(initTime);
  }, [initTime]);

  useEffect(() => {
    if (timeLeft == 3) {
      const audio = new Audio("clockTimeout.mp3");
      audio.play();
    }
    if (timeLeft === 0) {
      setIsRunning(false);
      setStatus("end");
      setStartTimer(false);
      setTimeLeft(initTime);
    }
  }, [timeLeft]);

  useEffect(() => {
    let intervalId;
    if (startTimer) {
      intervalId = setInterval(() => {
        setTimeLeft((prevVal) => {
          if (prevVal <= 1) {
            return 0;
          }
          return prevVal - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [startTimer]);

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
