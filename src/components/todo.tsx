import { SyntheticEvent } from "react";
import "./todo.css";

const Todo = ({ items, setItems }: { items: string[]; setItems: Function }) => {
  const handleCross = (event: SyntheticEvent) => {
    let target = event.target as HTMLElement;
    let txt = target.innerText;
    // if target has crossed out text
    if (txt.includes("\u0336")) {
      target.innerText = txt.replace(/[\u0336]/g, "");
      // remove the class crossed
      target.classList.remove("crossed");
      return;
    }
    // else
    target.innerText = txt
      .split("")
      .map((char) => "\u0336" + char + "\u0336")
      .join("");
    // add the class crossed
    target.classList.add("crossed");
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    let target = event.target as HTMLFormElement;
    let input = target.elements.namedItem("newItem") as HTMLInputElement;
    let newItem = input.value;
    if (newItem) {
      setItems([...items, newItem]);
      input.value = "";
    }
  };
  return (
    <div className="todo">
      <ul className="list">
        {items.map((item, index) => {
          return (
            <li className="item" onClick={handleCross} key={index}>
              {item}
            </li>
          );
        })}
        <li className="last-item">
          <form onSubmit={handleSubmit}>
            <label htmlFor="newItem">Añadir nuevo elemento</label>
            <input type="text" id="newItem" name="newItem" />
            <button type="submit" className="btn">
              ✔️
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
