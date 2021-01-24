import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Box, TextField, Button, makeStyles, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  container: (props) => ({
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: props.isDragging ? "lightGreen" : "white",
  }),
  handle: {
    width: "20px",
    height: "20px",
    backgroundColor: "orange",
    borderRadius: "4px",
    marginRight: "8px",
  },
}));

function Task({ task, index }) {
  const classes = useStyles();
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Box
            className={classes.container}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Box className={classes.handle} {...provided.dragHandleProps} />
            {task.content}
          </Box>
        )}
      </Draggable>
    </>
  );
}
export default Task;
