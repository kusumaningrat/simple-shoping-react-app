# 🛒 Simple Shopping React App

This is a basic React application that allows users to manage a shopping cart. You can add products with quantities, view a list of items, mark them as bought (checked), and delete them.

---

## ✨ Features

- ✅ **Add Item** — Enter a product name and quantity, then add it to the cart.
- 📋 **List Items** — Displays all items in the shopping list.
- 🔄 **Toggle Check** — Mark items as checked (bought) or unchecked.
- 📝 **Update Item** — Edit an existing item's name, quantity, or price in the cart.
- ❌ **Delete Item** — Remove an item from the list with a confirmation prompt.

---

## 🧩 Component Structure

- `App.jsx`  
  The root component that manages the main state (`items`) and renders all subcomponents. It handles adding, updating, and deleting items.

- `FormProduct.jsx`  
  A form component to input product name, quantity, and price. It handles both adding new items and updating existing ones. Submits data to `App` via `onAddItem` or `onUpdateItem`.

- `CardList.jsx`  
  Displays the list of shopping items by mapping through `items` and rendering `ItemList` components.

- `ItemList.jsx`  
  Renders a single item with:
  - A checkbox to toggle its checked status (`onToggleItem`).
  - A delete button with confirmation (`onDeleteItem`).
  - An update button to trigger item editing (`onEditItem`).

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/simple-shopping-react-app.git
```

### 2. Run the backend server
```bash
cd simple-shopping-react-app/server
npm install
npm run start:dev
```

### Run the app

You can use `npm` or `pnpm` to run it. 

```bash
cd simple-shopping-react-app
pnpm install
pnpm run dev
```
