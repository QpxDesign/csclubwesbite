import React, { useEffect, useState } from "react";

export default function MutipleChoice(props) {
  const [awnser, setAwnser] = useState("");
  function callBackMethod() {
    props.sendData(awnser, props.question);
  }
  return (
    <div className="mc-wrapper">
      {" "}
      {props.question.choices.map((choice, index) => {
        return (
          <div className="choice-wrapper" key={index}>
            <input
              type="radio"
              name={props.question.id}
              onChange={(e) => setAwnser(choice)}
            />
            <h1 className="mc-text">{choice}</h1>
          </div>
        );
      })}
    </div>
  );
}
