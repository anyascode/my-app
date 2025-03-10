function Task({ title, onDelete, todoId, onComplete, isChecked }) {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={() => onComplete(todoId)}
      />
      <label onClick={() => onComplete(todoId)}>
        <span className="description">{title}</span>
        <span className="created">created 17 seconds ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button
        className="icon icon-destroy"
        onClick={() => onDelete(todoId)}
      ></button>
    </div>
  );
}

export default Task;
