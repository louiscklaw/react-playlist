import '@atlaskit/css-reset';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './column';
import React from 'react';
import initialData from './initial-data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.column === this.props.column &&
      nextProps.taskMap === this.props.taskMap &&
      nextProps.index === this.props.index
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);

    return <Column column={column} tasks={tasks} index={index} />;
  }
}

class App extends React.Component {
  state = initialData;
  onDragStart = () => {
    document.body.style.color = 'orange';
  };
  onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  onDragEnd = (result) => {
    document.body.style.color = 'inherit';

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    // NOTE: check if the position changed
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    console.log('type', type);

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      console.log('newState', newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

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

        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
          },
        };

        this.setState(newState);
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

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      this.setState(newState);
    }

    // onDragEnd
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];

                return <InnerList key={column.id} column={column} taskMap={this.state.tasks} index={index} />;
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default App;
