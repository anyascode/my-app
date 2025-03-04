import { useState } from "react";
import "./NewTaskForm.css";

export default function NewTaskForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleKeyDown = (e) => {
    if (e.code === "Enter" && title.trim() !== "") {
      onAddTodo(title.trim());
      setTitle("");
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
