import Footer from "../components/Footer";
import Head from "../components/Head";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoApp = () => {
  return (
    <>
      <Head />
      <div className="main-container">
        <h1>To Do APP</h1>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
};

export default TodoApp;
