import React, { useEffect, useRef, useState } from "react";

export default function CommandLineItem(props) {
  const textInput = useRef(null);
  const [username, setUsername] = useState("");
  const handleSubmit = () => {
    callBackMethod();
  };
  useEffect(() => {
    if (props.type === "Input") {
      textInput.current.focus();
    }
  }, []);
  function callBackMethod() {
    if (username !== "") {
      props.sendData(username);
    }
  }

  if (props.type !== "Input") return <h1 className="cl-text">{props.text}</h1>;
  return (
    <div className="hstack">
      <h1 className="cl-text">Username:</h1>
      <input
        className="cl-input"
        ref={textInput}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="cl-button" onClick={() => handleSubmit()}>
        im ready
      </button>
    </div>
  );
}
