import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
  function handleIsPacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure want to delete all Items?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onIsPackedClicked={handleIsPacked}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
