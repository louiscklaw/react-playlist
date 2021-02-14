// @flow
import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DraggableProvided,
  DroppableProvided,
} from "react-beautiful-dnd";
import type { Quote as QuoteType } from "../types";

import { quotes as initial } from "./data";
import { quotes_list } from "./data";

import reorder from "./reorder";
import { grid } from "./constants";

type QuoteProps = {|
  quote: QuoteType,
  index: number,
|};

type QuoteListProps = {|
  quotes: QuoteType[],
|};

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

function Quote({ quote, index }: QuoteProps) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided: DraggableProvided) => (
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

// Ensuring the whole list does not re-render when the droppable re-renders
const QuoteList = React.memo(function QuoteList({ quotes }: QuoteListProps) {
  return quotes.map((quote: QuoteType, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

function QuoteApp() {
  const [quotes, setQuotes] = useState(initial);

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newQuotes = reorder(
      quotes,
      result.source.index,
      result.destination.index
    );

    setQuotes(newQuotes);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {quotes.map((quote: QuoteType, index: number) => (
              <Draggable draggableId={quote.id} index={index}>
                {(provided: DraggableProvided) => (
                  <QuoteItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {quote.content}
                  </QuoteItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default QuoteApp;
