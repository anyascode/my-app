import PropTypes from "prop-types"; // Импорт PropTypes
import Task from "../Task/Task";
import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <li className={item.className || ""} key={item.id}>
          <Task />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default TaskList;
