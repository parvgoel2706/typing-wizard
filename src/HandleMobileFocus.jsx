import { useEffect, useRef, useState } from "react";
import keyboardImg from "./assets/keyboard.jpg";

const HandleMobileFocus = ({ isRunning }) => {
  const inputRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 2500);
    } else {
      inputRef.current?.blur();
    }
  }, [isRunning]);

  useEffect(() => {
    const handleFocus = () => setIsInputFocused(true);
    const handleBlur = () => {
      setIsInputFocused(false);
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    }

    return () => {
      if (input) {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "left" }}>
      {!isInputFocused && (
        <>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>show keyboard</span>
          <br />
          <button
            onClick={() => inputRef.current?.focus()}
            style={{ padding: "3px 3px 0px 3px" }}
          >
            <img src={keyboardImg} alt="Keyboard" style={{ width: "100px" }} />
          </button>
        </>
      )}
      <input ref={inputRef} type="text" style={{ opacity: "0" }} />
    </div>
  );
};

export default HandleMobileFocus;
