import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { Quote as QuoteType } from "../types";

import QuoteList from "./QuoteList";
import Quote from "./Quote";

import "./App.css";

const grid = 8;

const QuoteItem = styled.div`
  width: 50vw;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

const initial = Array.from({ length: 5 }, (v, k) => k).map((k) => {
  const custom: Quote = {
    id: `id-${k}`,
    content: `Quote ${k}`,
  };

  return custom;
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [state, setState] = useState({ quotes: initial });

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
      <Droppable droppableId="ml_list" direction="horizontal" type="column">
        {(lc_provided) => (
          <div ref={lc_provided.innerRef} {...lc_provided.droppableProps}>
            {/* master list */}
            <Droppable droppableId="list">
              {(lc_provided) => (
                <div ref={lc_provided.innerRef} {...lc_provided.droppableProps}>
                  {/* <QuoteList quotes={state.quotes} /> */}
                  {state.quotes.map((quote: QuoteType, index: number) => {
                    return (
                      <>
                        <Draggable draggableId={quote.id} index={index}>
                          {(provided) => (
                            <QuoteItem
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {quote.content}
                              <div
                                style={{
                                  backgroundImage: `url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,
                                  width: "100px",
                                  height: "100px",
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                }}
                              />
                            </QuoteItem>
                          )}
                        </Draggable>
                      </>
                    );
                  })}
                  {lc_provided.placeholder}
                </div>
              )}
            </Droppable>
            {lc_provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
