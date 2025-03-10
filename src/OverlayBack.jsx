import "./OverlayBack.css";

export default function OverlayBack({ isRunning }) {
  return (
    <div
      className={`OverlayBack ${!isRunning ? "showBack" : "hideBack"}`}
    ></div>
  );
}
