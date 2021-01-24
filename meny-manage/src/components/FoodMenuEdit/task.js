import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { Box, TextField, Button, makeStyles, Input } from "@material-ui/core";

import DragHandleOutlinedIcon from "@material-ui/icons/DragHandleOutlined";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  container: (props) => ({
    border: "1px solid lightgrey",
    borderRadius: "2px",
    padding: "8px",
    marginBottom: "8px",
  }),
  container_is_dragging: {
    backgroundColor: "lightGreen",
  },
  container_is_stop: {
    backgroundColor: "white",
  },
  handle: {
    width: "20px",
    height: "20px",
    // backgroundColor: "orange",
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
            className={`${classes.container} ${
              snapshot.isDragging
                ? classes.container_is_dragging
                : classes.container_is_stop
            }`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Box
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box className={classes.handle} {...provided.dragHandleProps}>
                <DragHandleOutlinedIcon />
              </Box>
              <Box>
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
              </Box>
              <Box>{task.content}</Box>
            </Box>
          </Box>
        )}
      </Draggable>
    </>
  );
}
export default Task;
