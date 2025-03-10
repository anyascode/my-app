function TasksFilter({ currentFilter, onFilterChange }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === "all" ? "selected" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "active" ? "selected" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "completed" ? "selected" : ""}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
