import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  
  const [value, setValue] = useState(task.task);

  const handelSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
