import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

class SimpleSortableList extends Component {
  render() {
    return (
      <div>
        <Container onDrop={this.props.onDrop}>
          {this.props.items.map((item) => {
            return (
              <Draggable key={item.id}>
                {this.props.renderItem(item.id)}
              </Draggable>
            );
          })}
        </Container>
      </div>
    );
  }
}

function App() {
  let [items, setItems] = React.useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  let [debug] = React.useState();
  const helloOnDrop = (dropResult) => {
    console.log(dropResult);
    if (dropResult.removedIndex === dropResult.addedIndex) return;
    if (dropResult.added !== null || dropResult.removed !== null) {
      // setItems(temp_list);
      const newTaskIds = Array.from(items);
      let [draggableId] = newTaskIds.splice(dropResult.removedIndex, 1);
      newTaskIds.splice(dropResult.addedIndex, 0, draggableId);

      setItems(newTaskIds);
    }
  };
  const helloRenderItem = (i) => {
    return <>{`helloRenderItem ${i}`}</>;
  };

  return (
    <div className="App">
      <div style={{ height: '100%', width: '100%', backgroundColor: 'gold' }}>
        <SimpleSortableList
          items={items}
          onDrop={helloOnDrop}
          renderItem={helloRenderItem}
        />
      </div>
      <pre>{JSON.stringify(debug, null, 2)}</pre>
    </div>
  );
}

export default App;
