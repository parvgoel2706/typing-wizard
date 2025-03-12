import { useEffect, useRef } from "react";
import keyboardImg from "./assets/keyboard.jpg";

const HandleMobileFocus = ({ isRunning }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      inputRef.current?.focus();
    }
  }, [isRunning]);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ textAlign: "left" }}>
      <span style={{color:"rgba(255,255,255,0.6)"}}>show keyboard</span>
      <br/>
      <button onClick={handleClick} style={{ padding: "3px 3px 0px 3px" }}>
        <img src={keyboardImg} alt="Keyboard" style={{ width: "100px" }} />
      </button>
      <input ref={inputRef} type="text" style={{ visibility: "hidden" }} />
    </div>
  );
};

export default HandleMobileFocus;
