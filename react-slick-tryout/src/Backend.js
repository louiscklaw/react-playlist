import React from 'react'
import Column from './Column'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { ShareContext } from './context/Share'

const container = {
  width: '420px',
  display: 'flex',
  flexFlow: 'column',
}

export default function Backend() {
  let { state, setState } = React.useContext(ShareContext)

  const onDragEnd = result => {}
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          // direction="horizontal"
          type="column"
        >
          {provided => (
            <div ref={provided.innerRef} style={container} {...provided.droppableProps}>
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId]
                const tasks = column.taskIds.map(taskId => state.tasks[taskId])

                return <Column key={column.id} column={column} tasks={tasks} index={index} />
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}
