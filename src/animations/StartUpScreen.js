import React, { useState, useEffect } from "react";
import CommandLineItem from "./CommandLineItem";
import StartupLines from "../data/startup.json";

export default function StartUpScreen() {
  const [StartupLineArray, SetStartupLineArray] = useState([]);
  useEffect(() => {
    const nerd = setInterval(() => {
      SetStartupLineArray([
        ...StartupLineArray,
        StartupLines[StartupLineArray.length],
      ]);
      clearInterval(nerd);
    }, 2000);
    if (StartupLineArray.length === StartupLines.length) {
      clearInterval(nerd);
    }
  });

  return (
    <div className="terminal-wrapper">
      {Array.isArray(StartupLineArray)
        ? StartupLineArray.map((line, index) => {
            return <CommandLineItem text={line} key={index} />;
          })
        : null}
    </div>
  );
}
