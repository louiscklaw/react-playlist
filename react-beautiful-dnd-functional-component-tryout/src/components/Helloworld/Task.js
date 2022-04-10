import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { ShareContext } from 'src/context/Share';

function Task({ task, index }) {
  let { handleItemEditClick, handleItemDeleteClick } = React.useContext(ShareContext);
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div>
                <div
                  style={{
                    border: '1px solid lightgrey',
                    borderRadius: '2px',
                    padding: '8px',
                    marginBottom: '8px',
                    backgroundColor: 'white',
                    width: '300px',
                  }}>
                  <div>
                    {task.content}
                    <button onClick={(e) => handleItemEditClick(e, task.id)}>edit</button>
                    <button onClick={(e) => handleItemDeleteClick(e, task.id)}>delete</button>
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
