import TypingText from "./TypingText";

import { useState } from "react";

export default function TypingPrac() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="TypingPrac" style={{ color: "white" }}>
      <TypingText isRunning={isRunning} />
    </div>
  );
}
