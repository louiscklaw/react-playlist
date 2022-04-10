import { Draggable, Droppable } from 'react-beautiful-dnd';

import React from 'react';
import Task from './Task';

function Column({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          style={{
            margin: '8px',
            border: '1px solid lightgrey',
            backgroundColor: 'white',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
          }}
          ref={provided.innerRef}>
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            <div {...provided.dragHandleProps} style={{ padding: '8px' }}>
              {column.title}
            </div>
          </div>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  padding: '8px',
                  backgroundColor: snapshot.isDraggingOver ? 'skyblue' : 'inherit',
                  minHeight: '100px',
                }}>
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

export default React.memo(Column);
