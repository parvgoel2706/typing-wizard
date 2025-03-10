import "./overlayMain.css";
import StartPage from "./StartPage";
import EndPage from "./EndPage";
import { useEffect, useState } from "react";
import Wizard from "./Wizard";

export default function OverlayMain({
  isRunning,
  setIsRunning,
  Status,
  setStatus,
}) {
  const [overlayClass, setOverlayClass] = useState("dispMain"); // Track class state

  useEffect(() => {
    if (Status === "start") {
        setOverlayClass("dispMain");
    }
  }, [Status]);

  return (
    <div
      key={Status}
      className={`overlayMain ${!isRunning ? overlayClass : "hideMain"}`}
    >
      <Wizard />
      {Status === "start" && <StartPage setIsRunning={setIsRunning} />}
      {Status === "end" && (
        <EndPage setStatus={setStatus} setIsRunning={setIsRunning} />
      )}
    </div>
  );
}
