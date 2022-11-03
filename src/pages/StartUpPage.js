import React, { useState, useEffect } from "react";
import CommandLineItem from "../animations/CommandLineItem";
import StartupLines from "../data/startup.json";

export default function StartUpPage() {
  const [StartupLineArray, SetStartupLineArray] = useState([]);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    if (!skipAnimation) {
      const nerd = setInterval(() => {
        SetStartupLineArray([
          ...StartupLineArray,
          StartupLines[StartupLineArray.length],
        ]);
        clearInterval(nerd);
      }, 800);
      if (StartupLineArray.length === StartupLines.length) {
        setTimeout(1200);
        clearInterval(nerd);
      }
    } else {
      SetStartupLineArray(StartupLines);
    }
  });
  return (
    <div className="terminal-wrapper" onClick={() => setSkipAnimation(true)}>
      {Array.isArray(StartupLineArray)
        ? StartupLineArray.map((line, index) => {
            return <CommandLineItem text={line} key={index} />;
          })
        : null}
      {StartupLineArray.length === StartupLines.length ? (
        <CommandLineItem type={"Input"} inputTitle={"username:"} />
      ) : null}
    </div>
  );
}
