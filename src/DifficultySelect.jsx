import "./SelectMenu.css";
import { useEffect } from "react";

export default function DifficultySelect({ setDifficulty }) {
  let handleInput = (event) => {
    setDifficulty(Number(event.target.value));
  };
  useEffect(() => {
    setDifficulty(1);
  }, []);

  return (
    <select
      name="difficulty"
      onChange={handleInput}
      defaultValue="1"
      className="select-menu"
    >
      <option value="0">Easy</option>
      <option value="1">Medium</option>
      <option value="2">Hard</option>
    </select>
  );
}
