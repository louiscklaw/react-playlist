import React from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/styles";
import { Box, TextField, Button, makeStyles, Input } from "@material-ui/core";

import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightGreen" : "white")};
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

function Task({ task, index }) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} />
            {task.content}
          </Container>
        )}
      </Draggable>
    </>
  );
}
export default Task;
