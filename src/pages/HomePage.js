import React, { useState } from "react";
import StartUpScreen from "./StartUpPage.js";

export default function HomePage() {
  const [username, setUsername] = useState("");
  function getDatafromChild(val) {
    setUsername(val);
  }
  return (
    <>
      <StartUpScreen sendData={getDatafromChild} />
    </>
  );
}
