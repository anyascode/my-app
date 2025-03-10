import Task from "../Task/Task";
import "./TaskList.css";

function TaskList({ tasks, onDeleteTodo, completeTodo }) {
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.done ? "completed" : ""}>
          <Task
            title={item.title}
            onDelete={onDeleteTodo}
            todoId={item.id}
            onComplete={() => completeTodo(item.id)}
            isChecked={item.done}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
