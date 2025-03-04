import "./OverlayBack.css";

export default function OverlayBack({isRunning}) {

  return <div id="OverlayBack" className={!isRunning?"showBack":"hideBack"}>
  </div>;
}
