import "./OverlayMain.css";
import StartPage from "./StartPage";
import Wizard from "./Wizard";

export default function OverlayMain({setStatus,Status}) {
  return (
    <div id = "OverlayMain" className={(Status==="start"||Status==="end")?"dispMain":"hideMain"}>
      <Wizard />
      <StartPage setStatus={setStatus} />
    </div>
  );
}
