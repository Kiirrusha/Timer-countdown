import { useState } from "react";
import { Countdown } from "./components/Countdown/Countdown";
import { Switch } from "./components/Switch";
import { Timer } from "./components/timer/Timer";
import "./main.css";

function App() {
  const [tab, setTab] = useState("Timer");

  return (
    <>
      <Switch onChange={(current: "Timer" | "Countdown") => setTab(current)}></Switch>
      {tab === "Timer" && <Timer />}
      {tab === "Countdown" && <Countdown />}
    </>
  );
}

export default App;
