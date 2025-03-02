import "./StartPage.css";

export default function StartPage() {
  return (
    <div className="StartPage">
      <div>
        <h1 id="projName1" className="projName">
          Typing
        </h1>
        <h1 id="projName2" className="projName">
          Wizard
        </h1>
      </div>
      <button className="startBtn">Start Typing Test</button>
    </div>
  );
}
