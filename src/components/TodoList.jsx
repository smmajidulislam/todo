import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../feature/todoSlice";
import "../css/todo.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
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
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
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
