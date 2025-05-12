export default function ItemList({ item, onToggleItem, onDeleteItem }) {
  return (
    <>
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.product_name} ({item.quantity})
        </span>
        <p>Rp. {item.price}</p>
        <button
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete this item (${item.product_name}) ?`
              )
            ) {
              onDeleteItem(item.id);
            }
          }}
        >
          &times;
        </button>
      </li>
    </>
  );
}
