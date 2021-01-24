import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import DragHandleOutlinedIcon from "@material-ui/icons/DragHandleOutlined";

import { Button, Typography, makeStyles, Box } from "@material-ui/core";

import Task from "./task";

import { LYNKED_LIGHT_GREY, LYNKED_LIGHT_GREY_HOVER } from "src/consts/colors";

const useStyles = makeStyles((theme) => ({
  helloworld: {},
  container: {
    margin: "8px",
    border: "1px solid lightgrey",
    backgroundColor: "white",
    borderRadius: "2px",
    width: "100%",

    display: "flex",
    flexDirection: "column",
  },
  tasklist: (props) => ({
    transition: "background-color 0.2s ease",
    // backgroundColor: props.isDraggingOver ? "skyblue" : "inherit",
    flexGrow: "1",
    minHeight: "100px",
  }),
  tasklist_is_dragging_over: {
    backgroundColor: LYNKED_LIGHT_GREY_HOVER,
  },
  tasklist_not_dragging_over: {
    backgroundColor: "white",
  },
  title_row: {
    margin: "0px",
  },
}));

export default function Helloworld({ column, tasks, index }) {
  const classes = useStyles();
  return (
    <>
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <Box
            className={classes.container}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Box className={classes.titl_row} {...provided.dragHandleProps}>
              <Box
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: LYNKED_LIGHT_GREY,
                  width: "100%",
                  height: "100%",
                  padding: "10px",
                }}
              >
                <DragHandleOutlinedIcon />
                {column.title}
              </Box>
            </Box>
            <Droppable droppableId={column.id} type="task">
              {(provided, snapshot) => (
                <Box
                  className={`${classes.tasklist} ${
                    snapshot.isDraggingOver
                      ? classes.tasklist_is_dragging_over
                      : classes.tasklist_not_dragging_over
                  }`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                  <Button>helloworld add button</Button>
                </Box>
              )}
            </Droppable>
          </Box>
        )}
      </Draggable>
    </>
  );
}
