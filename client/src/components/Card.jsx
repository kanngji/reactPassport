import React from "react";

export default function Card({ post }) {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="cardImg" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
}
