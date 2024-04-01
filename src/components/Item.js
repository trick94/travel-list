export default function Item({ item, onDeleteItem, onIsPackedClicked }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onIsPackedClicked(item.id)}
        checked={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
