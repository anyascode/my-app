import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";

function Footer({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  tasksNumber,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksNumber} items left</span>
      <TasksFilter
        currentFilter={currentFilter}
        onFilterChange={onFilterChange}
      />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
