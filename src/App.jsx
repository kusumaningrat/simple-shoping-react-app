import { useState } from "react";
import CardList from "./components/CartList";
import FormProduct from "./components/FormProduct";
import Header from "./components/Header";
import { useEffect } from "react";
import { destroy, getAll, update } from "./api/ItemList";

export default function App() {
  const [items, setItems] = useState([]);
  const [updateItem, setUpdateItem] = useState(null);

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
    // setItems((items) =>
    //   items.map((item) =>
    //     item.id === id ? { ...item, checked: !item.checked } : item
    //   )
    // );
    const itemToUpdate = items.find((item) => item.id === id);
    const updatedChecked = !itemToUpdate.checked;

    update(id, { checked: updatedChecked })
      .then(() => {
        setItems((items) =>
          items.map((item) =>
            item.id === id ? { ...item, checked: updatedChecked } : item
          )
        );
      })
      .catch((e) => console.error("Error updating items", e));
  }

  function handleUpdateItem(id, updatedData) {
    const updatedItem = items.map((existingItem) =>
      existingItem.id === id
        ? { ...existingItem, ...updatedData }
        : existingItem
    );
    setItems(updatedItem);
    update(id, updatedData)
      .then((updatedItemFromAPI) => {
        // Handle success (optional)
        console.log("Item updated successfully", updatedItemFromAPI);
        setUpdateItem(null); // Clear the form after update
      })
      .catch((error) => {
        console.error("Error updating item", error);
      });
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

  const totalPrice = items
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.quantity * item.price, 0);

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
          <FormProduct
            onAddItem={handleAddItem}
            updateItem={updateItem}
            onUpdateItem={handleUpdateItem}
          />
          <div className="list-items">
            <CardList
              items={items}
              onToggleItem={handleToggleItem}
              onDeleteItem={handleDeleteItem}
              onUpdateItem={(id, item) => setUpdateItem(item)}
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
