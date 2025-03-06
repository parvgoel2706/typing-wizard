import { useEffect } from "react";

export default function TimeSelect({ setInitial }) {
  let handleInput = (event) => {
    setInitial(event.target.value);
  };

  useEffect(() => {
    setInitial("30");
  },[]);

  return (
    <select name="time" id="time" onChange={handleInput} defaultValue="30">
      <option value="15">15 secs</option>
      <option value="30">30 secs</option>
      <option value="60">60 secs</option>
      <option value="90">90 secs</option>
      <option value="120">120 secs</option>
      <option value="150">150 secs</option>
      <option value="180">180 secs</option>
      <option value="300">300 secs</option>
    </select>
  );
}
