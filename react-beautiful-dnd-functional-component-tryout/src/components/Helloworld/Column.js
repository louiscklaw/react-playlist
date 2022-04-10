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
          ariaDetails="helloworld"
          ref={provided.innerRef}>
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            <div style={{ padding: '8px' }} {...provided.dragHandleProps}>
              {column.title}
            </div>
          </div>
          <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  padding: '8px',
                  backgroundColor: snapshot.isDraggingOver ? 'skyblue' : 'inherit',
                  minHeight: '100px',
                }}
                {...provided.droppableProps}>
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
