import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { Quote as QuoteType } from "../types";

import initialData from "./initial-data";

import Column from "./column";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  const custom: Quote = {
    id: `id-${k}`,
    content: `Quote ${k}`,
  };

  return custom;
});

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided) => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote: QuoteType, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

function App() {
  const [stateInitialData, setStateInitialData] = useState(initialData);
  const [columnOrder, setColumnOrder] = useState(stateInitialData.columnOrder);
  const [columns, setColumns] = useState(stateInitialData.columns);
  const [tasks, setTasks] = useState(stateInitialData.tasks);

  React.useEffect(() => {
    setStateInitialData({
      tasks: tasks,
      columns: columns,
      columnOrder: columnOrder,
    });
  }, [columnOrder, columns, tasks]);

  function onDragStart() {
    document.body.style.color = "orange";
  }

  function onDragUpdate(update) {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }

  function onDragEnd(result) {
    document.body.style.color = "inherit";
    const { destination, source, draggableId, type } = result;

    // dropping an item to column itself cause destination == null
    if (!destination) {
      return;
    }

    try {
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
    } catch (error) {
      console.log(destination);
    }
    // NOTE: check if the position changed

    console.log("type", type);

    if (type === "column") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (true) {
      // compare the start column and the finish column
      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);

        // NOTE: remove old item
        newTaskIds.splice(source.index, 1);
        // NOTE: insert into new array
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };

        setColumns({
          ...columns,
          [newColumn.id]: newColumn,
        });

        return;
      }

      // NOTE: consider the case, move away from start column and drop into the finish column
      // Moving from one list to another
      const startTaskIds = Array.from(start.taskIds);
      // NOTE: move away from start column
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      // NOTE: drop into finish column
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      setColumns({
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      });
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="vertical" type="column">
          {(provided) => {
            return (
              <>
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {columnOrder.map((columnId, index) => {
                    const column = columns[columnId];
                    // TODO: look back here
                    const temp_tasks = column.taskIds.map(
                      (taskId) => tasks[taskId]
                    );

                    return (
                      <Column
                        key={column.id}
                        column={column}
                        tasks={temp_tasks}
                        index={index}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              </>
            );
          }}
        </Droppable>
      </DragDropContext>
      <pre>{JSON.stringify(stateInitialData, null, 2)}</pre>
    </>
  );
}

export default App;
