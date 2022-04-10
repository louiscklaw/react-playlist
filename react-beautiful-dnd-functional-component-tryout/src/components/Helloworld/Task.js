import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

function Task({ task, index }) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <div
                style={{
                  border: '1px solid lightgrey',
                  borderRadius: '10px',
                  padding: '8px',
                  marginBottom: '8px',
                  backgroundColor: snapshot.isDragging ? 'gold' : 'inherit',
                }}>
                {task.content}
              </div>
            </div>
          );
        }}
      </Draggable>
    </>
  );
}

export default React.memo(Task);
