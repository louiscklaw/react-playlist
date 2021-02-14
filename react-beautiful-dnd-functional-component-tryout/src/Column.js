import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

const container = {
  margin: "8px",
  border: "1px solid lightgrey",
  borderRadius: "2px",
  width: "420px",

  display: "flex",
  flexDirection: "column",
};

const title = { padding: "8px" };
const task_list = {
  padding: "8px",
  backgroundColor: "gold",
  minHeight: "100px",
};

export default function Helloworld({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          style={container}
          {...provided.draggableProps}
        >
          <div style={title} {...provided.dragHandleProps}>
            {column.title}
          </div>
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                style={task_list}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index}></Task>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
