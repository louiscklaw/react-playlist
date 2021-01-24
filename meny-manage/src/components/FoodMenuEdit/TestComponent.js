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
  const [state, setState] = useState({ quotes: initial });
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  const [columns, setColumns] = useState(initialData.columns);
  const [tasks, setTasks] = useState(initialData.tasks);

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
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
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
  );
}

export default App;
