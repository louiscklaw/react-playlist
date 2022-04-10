import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

function Task({ task, index }) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div
                style={{
                  border: '1px solid lightgrey',
                  borderRadius: '10px',
                  padding: '8px',
                  marginBottom: '8px',
                  width: '300px',
                  backgroundColor: snapshot.isDragging ? 'lightgrey' : 'white',
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
