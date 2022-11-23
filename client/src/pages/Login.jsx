import React from "react";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";

export default function Login() {
  return (
    <div>
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
