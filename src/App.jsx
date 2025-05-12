import { useState } from "react";
import CardList from "./components/CartList";
import FormProduct from "./components/FormProduct";
import Header from "./components/Header";

const groceryItems = [
  {
    id: 1,
    product_name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    product_name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    product_name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];
export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([ ...items, item])
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
    setItems((items) => items.filter((item) => item.id !== id));
  }


  return (
    <>
      <div className="container">
        <Header />
        <div className="columns">
          <FormProduct onAddItem={handleAddItem} />
          <div className="list-items">
            <CardList items={items} onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} />
          </div>
        </div>
      </div>
    </>
  );
}
