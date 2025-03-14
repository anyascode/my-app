import { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleKeyDown = (e) => {
    const { title } = this.state;
    const { onAddTodo } = this.props;

    if (e.code === 'Enter' && title.trim() !== '') {
      e.preventDefault();
      onAddTodo(title.trim());
      this.setState({ title: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;

    return (
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          autoFocus
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default NewTaskForm;
