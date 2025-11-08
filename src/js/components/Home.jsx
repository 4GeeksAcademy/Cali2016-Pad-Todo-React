import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setTodos(todos.concat([inputValue]));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="fa solid fa-trash"
              onClick={() =>
                setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
              }
              style={{ cursor: "pointer", color: "crimson", marginLeft: "8px" }}
            ></i>
          </li>
        ))}
      </ul>

      <div>{todos.length} tasks</div>
    </div>
  );
};

export default Home;
