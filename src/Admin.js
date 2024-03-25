import React, { useState } from "react";
import { toast } from "react-hot-toast";
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
    toast.promise(saveItemToFirebase(item), {
      loading: "Saving Item to firebase...",
      success: <b>Item saved!</b>,
      error: <b>Could not save the item.</b>,
    });
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
