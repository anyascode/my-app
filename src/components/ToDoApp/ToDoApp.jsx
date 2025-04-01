import { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import './ToDoApp.css';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => ({
          ...task,
          seconds: task.status === 'active' ? task.seconds - 1 : task.seconds,
          status: task.status === 'active' && task.seconds - 1 <= 0 ? 'done' : task.status,
        }))
      );
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [tasks]);

  function handleAddTodo(title, seconds) {
    setTasks((prev) => [
      ...prev,
      {
        id: nextId,
        title: title,
        done: false,
        isEditing: false,
        createdAt: new Date(),
        seconds: seconds,
        status: 'idle',
      },
    ]);
    setNextId((prev) => prev + 1);
  }

  function handleDeleteTodo(todoId) {
    setTasks((prev) => prev.filter((task) => task.id !== todoId));
  }

  function completeTodo(todoId) {
    setTasks((prev) =>
      prev.map((task) => (task.id === todoId ? { ...task, done: !task.done, status: 'done', seconds: 0 } : task))
    );
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function handleClearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.done));
  }

  function handleEditTodo(todoId) {
    setTasks((prev) => prev.map((task) => (task.id === todoId ? { ...task, isEditing: !task.isEditing } : task)));
  }

  function editTask(newTitle, todoId) {
    setTasks((prev) =>
      prev.map((task) => (task.id === todoId ? { ...task, title: newTitle, isEditing: !task.isEditing } : task))
    );
  }

  function toggleTimer(todoId, newStatus) {
    setTasks((prev) => prev.map((task) => (task.id === todoId ? { ...task, status: newStatus } : task)));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done;
    if (filter === 'completed') return task.done;
    return true;
  });
  const remainingTasks = tasks.filter((task) => !task.done).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <NewTaskForm onAddTodo={handleAddTodo} />
      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onDeleteTodo={handleDeleteTodo}
          completeTodo={completeTodo}
          onEditTodo={handleEditTodo}
          editTask={editTask}
          onToggleTimer={toggleTimer}
        />
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
