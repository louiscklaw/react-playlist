import React from "react";
import Column from "./Column";
import initialData from "./initial-data";

import { DragDropContext } from "react-beautiful-dnd";

export default function Helloworld() {
  let [state, setState] = React.useState(initialData);

  const onDragEnd = (result) => {
    // todo
  };

  return (
    <>
      <DragDropContext onDragEnd={ondragend}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </>
  );
}
