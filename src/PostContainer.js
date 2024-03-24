import React, { useEffect } from "react";
import "./PostCard.css";
import useItem from "./hooks/useItem";

const PostCard = ({ title, price, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h2>#Food #Pizza</h2>
      <p className="price">${price}.00</p>
      <p>{title}</p>
      <p className="description">{description}</p>
      <button className="card__button">Add To Cart</button>
    </div>
  );
};

export const PostContainer = () => {
  const { fetchItemsFromFirebase, itemList } = useItem();

  useEffect(() => {
    const unsubscribe = fetchItemsFromFirebase();
    return () => unsubscribe();
  }, []);
  return (
    <div className="card__container">
      {itemList.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </div>
  );
};
