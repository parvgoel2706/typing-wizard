import "./OverlayMain.css";
import StartPage from "./StartPage";
import Wizard from "./Wizard";

export default function OverlayMain() {
  return (
    <div className="OverlayMain">
      <Wizard />
      <StartPage />
    </div>
  );
}
