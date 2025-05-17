import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice.js";
import "../css/todo.css";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setId((id) => id + 1);
    dispatch(addTodo({ id, text }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Place your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
