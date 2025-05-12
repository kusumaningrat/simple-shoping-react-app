import { useState } from "react";
import CardList from "./components/CartList";
import FormProduct from "./components/FormProduct";
import Header from "./components/Header";
import { useEffect } from "react";
import { destroy, getAll } from "./api/ItemList";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAll()
      .then((data) => {
        // console.log(data)
        setItems(data);
      })
      .catch((err) => console.error("Error fetching data product", err));
  }, []);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  // console.log(items);
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDeleteItem(id) {
    // setItems((items) => items.filter((item) => item.id !== id));
    destroy(id)
      .then(() => {
        setItems((items) => items.filter((item) => item.id !== id));
      })
      .catch((e) => {
        console.error("Error deleting item", e);
      });
  }

  const totalPrice = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const totalPriceInIDR = totalPrice.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <>
      <div className="container">
        <Header />
        <div className="columns">
          <FormProduct onAddItem={handleAddItem} />
          <div className="list-items">
            <CardList
              items={items}
              onToggleItem={handleToggleItem}
              onDeleteItem={handleDeleteItem}
            />
          </div>
        </div>
        <div className="total-price">
          <p>Total Belanja: {totalPriceInIDR}</p>
        </div>
      </div>
    </>
  );
}
