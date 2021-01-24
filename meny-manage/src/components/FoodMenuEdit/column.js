import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
              </AccordionSummary>
              <AccordionDetails>
                <Droppable droppableId={this.props.column.id} type="task">
                  {(provided, snapshot) => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                      {this.props.tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                      <Button>helloworld add button</Button>
                    </TaskList>
                  )}
                </Droppable>
              </AccordionDetails>
            </Accordion>
          </Container>
        )}
      </Draggable>
    );
  }
}
