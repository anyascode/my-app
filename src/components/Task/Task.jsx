import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function Task({ title, onDelete, todoId, onComplete, isChecked, createdAt }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={isChecked} onChange={() => onComplete(todoId)} />
      <label>
        <span className="description">{title}</span>
        <span className="created">
          created{' '}
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            includeSeconds: true,
          })}
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={() => onDelete(todoId)}></button>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func,
  todoId: PropTypes.number,
  onComplete: PropTypes.func,
  isChecked: PropTypes.bool,
  createdAt: PropTypes.object,
};

Task.defaultProps = {
  isChecked: false,
};

export default Task;
