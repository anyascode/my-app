import Task from '../Task/Task';
import EditTask from '../EditTask/EditTask';
import './TaskList.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class TaskList extends Component {
  render() {
    const { tasks, onDeleteTodo, completeTodo, onEditTodo, editTask, onToggleTimer } = this.props;
    return (
      <ul className="todo-list">
        {tasks.map((item) =>
          item.isEditing ? (
            <EditTask key={item.id} editTask={editTask} task={item} />
          ) : (
            <Task
              key={item.id}
              title={item.title}
              onDelete={onDeleteTodo}
              todoId={item.id}
              onComplete={() => completeTodo(item.id)}
              isChecked={item.done}
              createdAt={item.createdAt}
              onEdit={onEditTodo}
              seconds={item.seconds}
              onStart={() => onToggleTimer(item.id, 'active')}
              onPause={() => onToggleTimer(item.id, 'idle')}
            />
          )
        )}
      </ul>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  editTask: PropTypes.func,
  onToggleTimer: PropTypes.func,
};

export default TaskList;
