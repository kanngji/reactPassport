import React from "react";
import namu from "../images/namu.PNG";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Kangji App</span>
      <ui className="list">
        <li className="listItem">
          <img src={namu} alt="avatar" className="avatar" />
        </li>
        <li className="listItem">Kang ji</li>
        <li className="listItem">Logout</li>
      </ui>
    </div>
  );
}
