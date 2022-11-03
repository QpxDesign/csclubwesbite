import React, { useState, useEffect } from "react";
import FormQuestions from "../data/formquestions.json";
import MultipleChoice from "./MutipleChoice";
import WriteIn from "./WriteIn";

export default function Form() {
  const [awnsers, setAwnsers] = useState({});
  function getDatafromChild(val, question) {
    const a = `{"${question.question}":"${val}"}`;
    const b = JSON.parse(a);
    const c = awnsers;
    c[question.id] = b;
    setAwnsers(c);
  }
  useEffect(() => {
    console.log(awnsers);
  }, [awnsers]);
  return (
    <div className="terminal-wrapper">
      {FormQuestions.map((question) => {
        return (
          <div className="question-wrapper">
            <h1 className="cl-text">{question.question}</h1>
            {question.type === "mutiplechoice" ? (
              <MultipleChoice question={question} sendData={getDatafromChild} />
            ) : null}
            {question.type === "writein" ? (
              <WriteIn question={question} sendData={getDatafromChild} />
            ) : null}
          </div>
        );
      })}
      <button
        className={awnsers !== {} ? "cl-button" : "hidden"}
        onClick={() => handleSubmit()}
      >
        im ready
      </button>
    </div>
  );
}
