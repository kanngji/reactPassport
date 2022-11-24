import React from "react";
import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="cardImg" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
}
