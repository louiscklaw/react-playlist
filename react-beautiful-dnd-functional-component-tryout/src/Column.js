import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const container = {
  margin: "8px",
  border: "1px solid lightgrey",
  borderRadius: "2px",
};

const title = { padding: "8px" };
const task_list = { padding: "8px" };

export default function Helloworld({ column, tasks }) {
  return (
    <div style={container}>
      <div style={title}>{column.title}</div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            style={task_list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index}></Task>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}
