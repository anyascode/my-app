import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import './ToDoApp.css';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState('all');

  function handleAddTodo(title) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nextId,
        title: title,
        done: false,
        createdAt: new Date(),
      },
    ]);
    setNextId((prevId) => prevId + 1);
  }

  function handleDeleteTodo(todoId) {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== todoId));
  }

  function completeTodo(todoId) {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === todoId ? { ...task, done: !task.done } : task)));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done;
    if (filter === 'completed') return task.done;
    return true;
  });

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleClearCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  }

  const remainingTasks = tasks.filter((task) => !task.done).length;

  console.log('hello world');

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTodo={handleAddTodo} />
      </header>
      <section className="main">
        <TaskList tasks={filteredTasks} onDeleteTodo={handleDeleteTodo} completeTodo={completeTodo} />
        <Footer
          currentFilter={filter}
          onFilterChange={handleFilterChange}
          onClearCompleted={handleClearCompleted}
          tasksNumber={remainingTasks}
        />
      </section>
    </section>
  );
}

export default ToDoApp;
