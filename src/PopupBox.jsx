import OverlayMain from "./OverlayMain";
import OverlayBack from "./OverlayBack";
import { useState } from "react";

export default function Popup() {
  let [Status, setStatus] = useState("start");
  return (
        <div className="PopupBosx">
          <OverlayBack Status={Status}/>;
          <OverlayMain setStatus={setStatus} Status={Status} />
        </div>
  );
}