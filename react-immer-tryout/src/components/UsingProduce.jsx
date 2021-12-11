import React from "react";

import produce from "immer";

const baseState = [
  { title: "Learn TypeScript", done: true },
  { title: "Try Immer", done: false },
];

const nextState = produce(baseState, (draftState) => {
  draftState.push({ title: "Tweet about it" });
  draftState[1].done = true;
});

export default () => {
  return (
    <>
      <pre>{JSON.stringify(nextState, null, 2)}</pre>
    </>
  );
};
