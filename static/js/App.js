import React from "react";
import Pomodoro from "static/js/pomodoro/Pomodoro.js";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
