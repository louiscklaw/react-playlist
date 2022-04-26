import React from 'react'
import Column from './Column'

import { ShareContext } from './context/Share'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const container = {
  width: '100%',
  display: 'flex',
  flexFlow: 'column',
}

export default function Helloworld() {
  let { state, setState } = React.useContext(ShareContext)

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result
    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = { ...state, columnOrder: newColumnOrder }

      setState(newState)
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    if (start === finish) {
      let newTaskIds = Array.from(start.carouselConfigIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      let newColumn = {
        ...start,
        carouselConfigIds: newTaskIds,
      }

      let newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }

      console.log(newState)

      setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.carouselConfigIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      carouselConfigIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.carouselConfigIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      carouselConfigIds: finishTaskIds,
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setState(newState)
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" type="column">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={container}>
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId]
                const carousel_configs = column.carouselConfigIds.map(
                  taskId => state.carousel_configs[taskId],
                )

                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={carousel_configs}
                    carousel_configs={carousel_configs}
                    index={index}
                  />
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}