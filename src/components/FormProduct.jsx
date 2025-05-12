import { useState } from "react";
import { create } from "../api/ItemList";
import { useEffect } from "react";

export default function FormProduct({ onAddItem, updateItem, onUpdateItem }) {
  const [product_name, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (updateItem) {
      setProductName(updateItem.product_name);
      setQuantity(updateItem.quantity);
      setPrice(updateItem.price);
    }
  }, [updateItem]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!product_name || quantity < 0) return;

    const newItem = { product_name, quantity, price, checked: false };

    if (updateItem) {
      onUpdateItem(updateItem.id, { product_name, quantity, price });
      setProductName("")
      setQuantity(0)
      setPrice("");
    } else {
      try {
        const addedItem = await create(newItem);
        onAddItem(addedItem);

        // console.log(newItem);

        setProductName("");
        setQuantity(0);
        setPrice();
      } catch (e) {
        console.error("Error creating new item", e);
      }
    }
  }

  return (
    <>
      <form id="cartForm" onSubmit={handleSubmit}>
        <label htmlFor="product">Product:</label>
        <input
          type="text"
          id="product"
          name="product"
          value={product_name}
          placeholder="Product Name"
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" id="btn-submit">
          {updateItem ? "Update Item" : "Add to Cart"}
        </button>
      </form>
    </>
  );
}
