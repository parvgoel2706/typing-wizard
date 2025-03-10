import OverlayMain from "./OverlayMain";
import OverlayBack from "./OverlayBack";

export default function Popup({ isRunning, setIsRunning ,Status,setStatus }) {
  return (
    <div className="PopupBox">
      <OverlayBack isRunning={isRunning} />
      <OverlayMain isRunning={isRunning} setIsRunning={setIsRunning} Status={Status} setStatus={setStatus} />
    </div>
  );
}
