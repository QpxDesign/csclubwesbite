import React, { useState, useEffect } from "react";
import CommandLineItem from "../animations/CommandLineItem";
import StartupLines from "../data/startup.json";

export default function StartUpPage(props) {
  const [StartupLineArray, SetStartupLineArray] = useState([]);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [username, setUsername] = useState("");

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
  function callBackMethod() {
    props.sendData(username);
  }
  function getDatafromChild(val) {
    setUsername(val);
    callBackMethod();
  }
  return (
    <div className="terminal-wrapper" onClick={() => setSkipAnimation(true)}>
      {Array.isArray(StartupLineArray)
        ? StartupLineArray.map((line, index) => {
            return <CommandLineItem text={line} key={index} />;
          })
        : null}
      {StartupLineArray.length === StartupLines.length ? (
        <CommandLineItem type={"Input"} sendData={getDatafromChild} />
      ) : null}
    </div>
  );
}
