# 🛒 Simple Shopping React App

This is a basic React application that allows users to manage a shopping cart. You can add products with quantities, view a list of items, mark them as bought (checked), and delete them.

---

## ✨ Features

- ✅ **Add Item** — Enter a product name and quantity, then add it to the cart.
- 📋 **List Items** — Displays all items in the shopping list.
- 🔄 **Toggle Check** — Mark items as checked (bought) or unchecked.
- ❌ **Delete Item** — Remove an item from the list with a confirmation prompt.

---

## 🧩 Component Structure

- `App.jsx`  
  The root component that manages the main state (`items`) and renders all subcomponents.

- `FormProduct.jsx`  
  A form component to input product name and quantity. Submits data to `App` via `onAddItem`.

- `CardList.jsx`  
  Displays the list of shopping items by mapping through `items` and rendering `ItemList` components.

- `ItemList.jsx`  
  Renders a single item with:
  - A checkbox to toggle its checked status (`onToggleItem`)
  - A delete button with confirmation (`onDeleteItem`)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/simple-shopping-react-app.git
cd simple-shopping-react-app
```

### Run it

You can use `npm` or `pnpm` to run it. 

```bash
pnpm install
pnpm run dev
```
