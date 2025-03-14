import { Component } from 'react';
import PropTypes from 'prop-types';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.task.title,
    };
  }
  handleKeyDown = (e) => {
    const { title } = this.state;
    const { editTask } = this.props;
    const { task } = this.props;
    if (e.code === 'Enter' && title.trim() !== '') {
      editTask(title, task.id);
      this.setState({ title: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;

    return (
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <span className="description"></span>
          <span className="created">created 5 minutes ago</span>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" onKeyDown={this.handleKeyDown} value={title} onChange={this.handleChange} />
      </li>
    );
  }
}

EditTask.propTypes = {
  editTask: PropTypes.func,
  task: PropTypes.object,
};

export default EditTask;
