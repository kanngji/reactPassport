import React from "react";
import namu from "../images/namu.PNG";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Kangji app
        </Link>
      </span>
      {user ? (
        <ui className="list">
          <li className="listItem">
            <img src={namu} alt="avatar" className="avatar" />
          </li>
          <li className="listItem">Kang ji</li>
          <li className="listItem">Logout</li>
        </ui>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
}
