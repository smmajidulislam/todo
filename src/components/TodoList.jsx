// components/TodoList.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../feature/todoSlice";
import "../css/todo.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDone, setEditDone] = useState(false);

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text || "");
    setEditDone(todo.done || false);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, text: editText, done: editDone }));
    setEditId(null);
    setEditText("");
    setEditDone(false);
  };

  return (
    <div className="todo-list">
      {todos.slice(1).map((todo) => (
        <div key={todo.id} className="todo-item">
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <label style={{ marginLeft: "10px" }}>
                <input
                  type="checkbox"
                  checked={editDone}
                  onChange={() => setEditDone(!editDone)}
                />
                Done
              </label>
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() =>
                  dispatch(updateTodo({ id: todo.id, done: !todo.done }))
                }
              />
              <span>{todo.text}</span>
              <button
                onClick={() => handleEdit(todo)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
