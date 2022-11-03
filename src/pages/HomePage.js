import React, { useState } from "react";
import StartUpScreen from "./StartUpPage.js";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function HomePage() {
  function handleUserSignout() {
    localStorage.setItem("username", "");
    window.location.reload(false);
  }
  if (
    localStorage.getItem("username") === null ||
    localStorage.getItem("username") === ""
  ) {
    return <StartUpScreen />;
  }
  return (
    <section>
      <header>
        <h1>cs_club</h1>
        <h2>meetings every thursday at 12:15pm</h2>
        <h3>
          <BsFillPersonFill />
          {localStorage.getItem("username")}
          <AiOutlineClose onClick={() => handleUserSignout()} />
        </h3>
      </header>
      <div className="card-wrapper">
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
              it would look good on your college app (don't hold me to that)
            </li>
          </ul>
        </div>
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
          <h1>When & Where</h1>
          <h2>
            We meet in the Computer Science Lab (Room 123) everyweek! Here's our
            schedule:
          </h2>
          <ul>
            <li>Thrusday, November 10th - Meeting</li>
            <li>Thrusday, November 17th - Meeting</li>
            <li>Thrusday, December 1st - Meeting</li>
            <li>Thrusday, December 8th - Meeting</li>
            <li>Thrusday, December 15th - Meeting</li>
          </ul>
        </div>
        <div className="card">
          {" "}
          <h1>What's this for?</h1>
          <h2>
            We plan on using this website as a hub for challenges, schedules,
            project showcases, and a whole lot more! (pending school approval).
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
