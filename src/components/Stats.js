export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Ading some items to your packing list 🚀</em>
      </p>
    );
  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((100 * packedItems) / numOfItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go! ✈"
          : `🎒 You have ${numOfItems} items on your list, and you already packed
        ${packedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}
