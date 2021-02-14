import React from "react";

import { Draggable } from "react-beautiful-dnd";

const container = {
  border: "1px solid lightgrey",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "8px",
  backgroundColor: "white",
};

export default function Helloworld({ task, index }) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div style={container}>{task.content}</div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
}
