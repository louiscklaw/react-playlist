import produce from "immer";

const baseState = [
  { id: "JavaScript", title: "Learn TypeScript", done: true },
  { id: "Immer", title: "Try Immer", done: false },
];

function toggleTodo(state, id) {
  return produce(state, (draft) => {
    const todo = draft.find((todo) => todo.id === id);
    todo.done = !todo.done;
  });
}

export default () => {
  const nextState = toggleTodo(baseState, "Immer");

  return (
    <>
      <pre>{JSON.stringify(nextState, null, 2)}</pre>
    </>
  );
};
