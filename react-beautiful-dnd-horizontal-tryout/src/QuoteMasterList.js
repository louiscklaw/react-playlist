import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { Quote as QuoteType } from "../types";

import QuoteList from "./QuoteList";

import "./App.css";

const grid = 8;

function QuoteMasterList({ state }) {
  return (
    <>
      <Droppable droppableId="master-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable draggableId={`quote.id`} index={`index`}>
              <QuoteList quotes={state.quotes} />
              {provided.placeholder}
            </Draggable>
          </div>
        )}
      </Droppable>
    </>
  );
}

export default QuoteMasterList;
