import { useState } from 'react';
import PropTypes from 'prop-types';

function EditTask({ editTask, task }) {
  const [title, setTitle] = useState(task.title);

  const handleKeyDown = (e) => {
    if (e.code === 'Enter' && title.trim() !== '') {
      editTask(title, task.id);
      setTitle('');
    }
  };

  return (
    <li className="editing">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <span className="description"></span>
        <span className="created">created 5 minutes ago</span>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input
        type="text"
        className="edit"
        onKeyDown={handleKeyDown}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
    </li>
  );
}

EditTask.propTypes = {
  editTask: PropTypes.func,
  task: PropTypes.object,
};

export default EditTask;
