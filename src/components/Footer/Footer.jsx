import PropTypes from "prop-types";
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

Footer.propTypes = {
  currentFilter: PropTypes.object,
  onFilterChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
  tasksNumber: PropTypes.number,
};

export default Footer;
