import { Component } from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import './ToDoApp.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      nextId: 1,
      filter: 'all',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  handleAddTodo(title, minutes, seconds) {
    this.setState((prev) => ({
      tasks: [
        ...prev.tasks,
        {
          id: prev.nextId,
          title: title,
          done: false,
          isEditing: false,
          createdAt: new Date(),
          minutes: minutes,
          seconds: seconds,
        },
      ],
      nextId: prev.nextId + 1,
    }));
  }
  handleDeleteTodo(todoId) {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== todoId),
    }));
  }
  completeTodo(todoId) {
    this.setState((prev) => ({
      tasks: prev.tasks.map((task) => (task.id === todoId ? { ...task, done: !task.done } : task)),
    }));
  }
  handleFilterChange(newFilter) {
    this.setState({ filter: newFilter });
  }
  handleClearCompleted() {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => !task.done),
    }));
  }
  handleEditTodo(todoId) {
    this.setState((prev) => ({
      tasks: prev.tasks.map((task) => (task.id === todoId ? { ...task, isEditing: !task.isEditing } : task)),
    }));
  }
  editTask(newTitle, todoId) {
    this.setState((prev) => ({
      tasks: prev.tasks.map((task) =>
        task.id === todoId ? { ...task, title: newTitle, isEditing: !task.isEditing } : task
      ),
    }));
  }
  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = tasks.filter((task) => {
      if (filter === 'active') return !task.done;
      if (filter === 'completed') return task.done;
      return true;
    });
    console.log(tasks);

    const remainingTasks = tasks.filter((task) => !task.done).length;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>

          <NewTaskForm onAddTodo={this.handleAddTodo} />
        </header>
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleteTodo={this.handleDeleteTodo}
            completeTodo={this.completeTodo}
            onEditTodo={this.handleEditTodo}
            editTask={this.editTask}
          />
          <Footer
            currentFilter={filter}
            onFilterChange={this.handleFilterChange}
            onClearCompleted={this.handleClearCompleted}
            tasksNumber={remainingTasks}
          />
        </section>
      </section>
    );
  }
}

export default ToDoApp;
