import PropTypes from 'prop-types';
import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

class Task extends Component {
  showTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  }
  render() {
    const { title, onDelete, todoId, onComplete, isChecked, createdAt, onEdit, seconds, onStart, onPause } = this.props;
    return (
      <li className={isChecked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={isChecked} onChange={() => onComplete(todoId)} />
          <label>
            <span className="title">{title}</span>
            <span className="description">
              <button className="icon icon-play" onClick={() => onStart()}></button>
              <button className="icon icon-pause" onClick={() => onPause()}></button>
              {this.showTime(seconds)}
            </span>
            <span className="description">
              created{' '}
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>

          <button className="icon icon-edit" onClick={() => onEdit(todoId)}></button>
          <button className="icon icon-destroy" onClick={() => onDelete(todoId)}></button>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func,
  todoId: PropTypes.number,
  onComplete: PropTypes.func,
  isChecked: PropTypes.bool,
  createdAt: PropTypes.object,
  onEdit: PropTypes.func,
  seconds: PropTypes.number,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
};

Task.defaultProps = {
  isChecked: false,
};

export default Task;
