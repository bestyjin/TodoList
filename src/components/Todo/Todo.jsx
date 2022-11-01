import React from "react";

function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  return <li>{text}</li>;
}

export default Todo;
