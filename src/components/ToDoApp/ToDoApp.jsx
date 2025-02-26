import TaskList from "../TaskList/TaskList";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import Footer from "../Footer/Footer";
import "./ToDoApp.css";

function ToDoApp() {
  const tasksData = [
    { id: 1, className: "completed" },
    { id: 2, className: "editing" },
    { id: 3, className: null },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={tasksData} />
        <Footer />
      </section>
    </section>
  );
}

export default ToDoApp;
