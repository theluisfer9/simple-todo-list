import "./App.css";
import "./components/todo";
import Todo from "./components/todo";
import { useState } from "react";

function App() {
  const fakeItems = [
    "Investigar tema de tesis",
    "Caminar al perro",
    "Hacer las compras",
  ];
  const [items, setItems] = useState(fakeItems);
  const today = new Date();
  // format it to "Day of the week, day of the month, month, year"
  const date = today.toDateString();

  return (
    <div className="content">
      <div className="header">
        <h2 id="date">{date}</h2>
      </div>
      <Todo items={items} setItems={setItems} />
    </div>
  );
}

export default App;
