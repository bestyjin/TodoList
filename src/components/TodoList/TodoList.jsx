import React, { useState } from "react";
import Todo from "../Todo/Todo";

function TodoList(props) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
