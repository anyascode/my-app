import PropTypes from 'prop-types';
import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.seconds,
    };
    this.timeoutId = -1;
  }
  showTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return `${String(mins).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  startCountdown() {
    this.timeoutId = setInterval(() => {
      const seconds = this.state.seconds - 1;

      if (seconds <= 0) {
        clearInterval(this.timeoutId);
      }

      this.setState({ seconds });
    }, 1000);
  }

  pauseCountdown() {
    clearInterval(this.timeoutId);
    this.timeoutId = -1;
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }

  render() {
    const { title, onDelete, todoId, onComplete, isChecked, createdAt, onEdit } = this.props;
    return (
      <li className={isChecked ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={isChecked} onChange={() => onComplete(todoId)} />
          <label>
            <span className="title">{title}</span>
            <span className="description">
              <button className="icon icon-play" onClick={() => this.startCountdown()}></button>
              <button className="icon icon-pause" onClick={() => this.pauseCountdown()}></button>
              {this.showTime(this.state.seconds)}
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
};

Task.defaultProps = {
  isChecked: false,
};

export default Task;
