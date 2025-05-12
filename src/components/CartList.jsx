import ItemList from "./ItemList";

export default function CardList({
  items,
  onToggleItem,
  onUpdateItem,
  onDeleteItem,
}) {
  return (
    <>
      <h2>Cart Items</h2>
      <ul id="cartList">
        {items.map((item) => (
          <ItemList
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </>
  );
}
