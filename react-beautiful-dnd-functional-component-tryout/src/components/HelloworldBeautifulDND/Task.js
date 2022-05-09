import { Draggable } from 'react-beautiful-dnd'
import React from 'react'

function TaskContent({ task, snapshot }) {
  return (
    <div
      style={{
        border: '1px solid lightgrey',
        borderRadius: '10px',
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: snapshot.isDragging ? 'gold' : 'inherit',
      }}
    >
      <div>handle</div>
      <div>{task.content}</div>
    </div>
  )
}

function Task({ task, index }) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => {
          return (
            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <TaskContent task={task} snapshot={snapshot} />
            </div>
          )
        }}
      </Draggable>
    </>
  )
}

export default React.memo(Task)
