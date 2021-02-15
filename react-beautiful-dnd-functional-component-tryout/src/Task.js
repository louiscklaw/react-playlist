import React from "react";

import { Draggable } from "react-beautiful-dnd";

const container = {
  border: "1px solid lightgrey",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "8px",
  backgroundColor: "white",
  width: "300px",
};

function Task({ task, index }) {
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
              <div>
                <div style={container}>
                  <div>
                    {task.content}
                    <button>edit</button>
                    <button>delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
}

export default React.memo(Task);
