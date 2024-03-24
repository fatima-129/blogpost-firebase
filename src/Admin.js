import React, { useState } from "react";
import useItem from "./hooks/useItem";

const Admin = () => {
  const [item, setItem] = useState({
    title: "",
    price: 0,
    imageUrl: "",
    description: "",
  });
  const {
    deleteItemFromFirebase,
    fetchItemsFromFirebase,
    itemList,
    saveItemToFirebase,
  } = useItem();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveItemToFirebase(item);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item.title}
        placeholder="Enter title"
        required
        onChange={(e) => setItem((pre) => ({ ...pre, title: e.target.value }))}
      />
      <input
        type="number"
        value={item.price > 0 ? item.price : ""}
        min={1}
        placeholder="Enter price"
        required
        onChange={(e) => setItem((pre) => ({ ...pre, price: e.target.value }))}
      />
      <input
        type="text"
        value={item.imageUrl}
        placeholder="Enter imageUrl"
        required
        onChange={(e) =>
          setItem((pre) => ({ ...pre, imageUrl: e.target.value }))
        }
      />
      <input
        type="text"
        value={item.description}
        placeholder="Enter description"
        required
        onChange={(e) =>
          setItem((pre) => ({ ...pre, description: e.target.value }))
        }
      />
      <button type="submit">Add product</button>
    </form>
  );
};

export default Admin;
