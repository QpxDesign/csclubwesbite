import React, { useState } from "react";
import StartUpScreen from "./StartUpPage.js";
import Form from "../components/Form.js";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
export default function HomePage() {
  function handleUserSignout() {
    localStorage.setItem("username", "");
    window.location.reload(false);
  }
  console.log(localStorage.getItem("username"));
  if (
    localStorage.getItem("username") === null ||
    localStorage.getItem("username") === ""
  ) {
    return <StartUpScreen />;
  }
  if (
    localStorage.getItem("formawnsers") === null ||
    localStorage.getItem("formawnsers") === ""
  ) {
    return <Form />;
  }
  return (
    <section>
      <header>
        <h1>cs_club</h1>
        <h2>meetings every tuesday at 11:50am</h2>
        <h3>
          <BsFillPersonFill />
          {localStorage.getItem("username")}
          <AiOutlineClose onClick={() => handleUserSignout()} />
        </h3>
      </header>
      <div className="card-wrapper">
        <div className="card">
          <h1>What</h1>
          <h2>here are just a few examples of what goes on in CS Club</h2>
          <ul>
            <li>discussion of events in the world of cs</li>
            <li>competive coding challenges designed for all skillsets</li>
            <li>feedback exchange for personal projects</li>
            <li>collaborative projects</li>
          </ul>
        </div>
        <div className="card">
          {" "}
          <h1>Who</h1>
          <h2>
            we invite anyone with any level of experince to join! here's why you
            should:
          </h2>
          <ul>
            <li>it never hurts to try new things!</li>
            <li>
              you could learn simple coding skills that can make your digital
              life easier
            </li>
            <li>
              it would look good on your college ap (don't hold me to that)
            </li>
          </ul>
        </div>
        <div className="card">
          {" "}
          <h1>Where & When</h1>
          <h2>
            We meet in the Computer Science Lab (Room 123) everyweek! Here's our
            schedule:
          </h2>
          <ul>
            <li>Mon Sep 19th: Club Fair</li>
            <li>TBD Sep: First Meeting</li>
            <li>TBD Sep: First Challenge Issued</li>
            <li>TBD Oct: First Challenge Finished</li>
          </ul>
        </div>
        <div className="card">
          {" "}
          <h1>What's this for?</h1>
          <h2>
            We plan on using (insert url here) as a hub for challenges,
            schedules, project showcases, and a whole lot more! (pending school
            approval). Right now you can take a quick 3 question poll!
          </h2>
        </div>
        <div className="card">
          <h1>Get in Touch</h1>
          <h2>
            for now, please message me on github (@qpxdesign) for any assitance
            with the website. coming soon: a contact system right here on the
            website!
          </h2>
        </div>
      </div>
    </section>
  );
}
