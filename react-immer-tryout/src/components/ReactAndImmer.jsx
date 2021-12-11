import React, { useCallback, useState } from "react";
import produce from "immer";

const TodoList = () => {};

export default ({ children }) => {
  const [todos, setTodos] = useState([
    { id: "React", title: "Learn React", done: true },
    { id: "Immer", title: "Try Immer", done: false },
  ]);

  const handleToggle = useCallback((id) => {
    setTodos(
      produce((draft) => {
        const todo = draft.find((todo) => todo.id === id);
        todo.done = !todo.done;
      })
    );
  }, []);

  const handleAdd = useCallback(() => {
    setTodos(
      produce((draft) => {
        draft.push({
          id: "todo_" + Math.random(),
          title: "A new todo",
          done: false,
        });
      })
    );
  }, []);

  return (
    <>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <button
        onClick={(e) => {
          handleToggle("React");
        }}
      >
        Toggle React
      </button>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
