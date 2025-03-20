import { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      minutes: '',
      seconds: '',
    };
  }

  handleKeyDown = (e) => {
    const { title, minutes, seconds } = this.state;
    const { onAddTodo } = this.props;
    if (
      e.code === 'Enter' &&
      title.trim() !== '' &&
      Number.isInteger(Number(minutes)) &&
      Number.isInteger(Number(seconds))
    ) {
      e.preventDefault();
      onAddTodo(title.trim(), minutes, seconds);
      this.setState({ title: '', minutes: '', seconds: '' });
    }
  };

  handleChangeTask = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChangeMinute = (e) => {
    this.setState({ minutes: e.target.value });
  };

  handleChangeSeconds = (e) => {
    this.setState({ seconds: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { title, minutes, seconds } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.handleSubmit}>
        <input className="new-todo" placeholder="Task" value={title} autoFocus onChange={this.handleChangeTask} />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutes}
          autoFocus
          onChange={this.handleChangeMinute}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChangeSeconds}
          value={seconds}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTaskForm;
