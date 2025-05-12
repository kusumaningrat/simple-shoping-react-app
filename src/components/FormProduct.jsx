import { useState } from "react";

export default function FormProduct({ onAddItem }) {
  const [product_name, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!product_name) return;

    const id = Date.now();
    const newItem = { product_name, quantity, checked: false, id };
    onAddItem(newItem);

    // console.log(newItem);

    setProductName('');
    setQuantity(0);
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
        <button type="submit" id="btn-submit">
          Add to Cart
        </button>
      </form>
    </>
  );
}
