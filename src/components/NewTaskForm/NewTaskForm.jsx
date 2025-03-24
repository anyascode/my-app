import { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

class NewTaskForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const task = formData.get('task');
    const minutes = formData.get('minutes');
    const seconds = formData.get('seconds');

    if (
      task.trim() !== '' &&
      Number.isInteger(Number(minutes)) &&
      Number.isInteger(Number(seconds)) &&
      minutes.length !== 0 &&
      seconds.length !== 0
    ) {
      this.props.onAddTodo(task.trim(), Number(minutes) * 60 + Number(seconds));
      e.currentTarget.reset();
    }
  };
  render() {
    return (
      <form className="new-todo-form" onSubmit={this.handleSubmit}>
        <input name="task" className="new-todo" placeholder="Task" autoFocus />
        <input name="minutes" className="new-todo-form__timer" placeholder="Min" />
        <input name="seconds" className="new-todo-form__timer" placeholder="Sec" />
        <button type="submit" hidden></button>
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTaskForm;
