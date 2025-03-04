import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Footer from "../Footer/Footer";
import "./ToDoApp.css";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  function handleAddTodo(title) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nextId,
        title: title,
        done: false,
      },
    ]);
    setNextId((prevId) => prevId + 1);
  }

  function handleDeleteTodo(todoId) {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== todoId));
  }

  function completeTodo(todoId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === todoId ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTodo={handleAddTodo} />
      </header>
      <section className="main">
        <TaskList
          tasks={tasks}
          onDeleteTodo={handleDeleteTodo}
          completeTodo={completeTodo}
        />
        <Footer />
      </section>
    </section>
  );
}

export default ToDoApp;
