import { useState } from "react";
import { Trash, Edit } from "lucide-react";
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  }

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput
      };

      setList((prevList) => [...prevList, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    setList((prevList) => prevList.filter(item => item.id !== id));
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add item . . ."
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
          className="input-box"
        />
        <button
          onClick={addItem}
          className="add-button"
          aria-label="Add item to list"
        >
          ADD
        </button>
      </div>

      <div>
        <ul className="todo-list">
          {list.map((item, index) => (
            <li key={item.id} className="todo-item">
              <div style={{marginLeft: "2px"}}>{item.value}</div>
              <div className="todo-buttons">
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                  aria-label="Delete item"
                >
                  <Trash size={20} width={35} />
                </button>
                <button
                  className="edit-button"
                  onClick={() => editItem(index)}
                  aria-label="Edit item"
                >
                  <Edit size={20} width={35} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
