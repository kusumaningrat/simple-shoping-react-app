export default function ItemList({ item, onToggleItem, onUpdateItem, onDeleteItem }) {
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
        <button
        onClick={() => {
          onUpdateItem(item.id, item)
        }}
          style={{ background: "green", border: "none", cursor: "pointer" }}
          aria-label="Edit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708L13.207 5.793l-3-3L12.146.854zM11.5 3.207l-3-3L1 7.707V11h3.293l7.207-7.207z" />
          </svg>
        </button>
      </li>
    </>
  );
}
