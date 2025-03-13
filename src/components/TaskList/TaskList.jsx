import Task from '../Task/Task';
import './TaskList.css';
import PropTypes from 'prop-types';

function TaskList({ tasks, onDeleteTodo, completeTodo }) {
  return (
    <ul className="todo-list">
      {tasks.map((item) => (
        <li key={item.id} className={item.done ? 'completed' : ''}>
          <Task
            title={item.title}
            onDelete={onDeleteTodo}
            todoId={item.id}
            onComplete={() => completeTodo(item.id)}
            isChecked={item.done}
            createdAt={item.createdAt}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};

export default TaskList;
