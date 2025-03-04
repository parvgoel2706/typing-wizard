import TypingText from "./TypingText";

import { useState } from "react";

export default function TypingPrac({ setIsRunning, changeStatus }) {
  // const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="TypingPrac" style={{ color: "white" }}>
      {/* <TypingText isRunning={isRunning} /> */}
      <button
        onClick={() => {
          changeStatus("end");
          setIsRunning(false);
        }}
      >
        click
      </button>
    </div>
  );
}
