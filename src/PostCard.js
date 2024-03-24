import React from "react";
import "./PostCard.css";

const PostCard = () => {
  return (
    <div className="card__container">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1613564834361-9436948817d1?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fHww"
          alt=""
        />
        <h2>#Food #Pizza</h2>
        <p className="price">$10.00</p>
        <p>What is the tastiest pizza in pizza Hut</p>
        <p className="description">
          My thoughts on the future of web development
        </p>
        <button className="card__button">Add To Cart</button>
      </div>
    </div>
  );
};
export default PostCard;
