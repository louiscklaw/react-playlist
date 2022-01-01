import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';

import './styles.css';

const listData = [...Array(20).keys()];
const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = React.memo(({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}>
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}>
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}>
                  <div />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
});

// const ListItem = React.memo(rawListItem);

const rawExpandedListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={(el) => {
        setTimeout(() => {
          el.classList.add('animated-in');
        }, 400);
      }}>
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}>
              <div className="avatar avatarExpanded" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}>
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 3).map((i) => (
                <div />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = React.memo(rawExpandedListItem);

class AnimatedList extends Component {
  state = { focused: null };
  onClick = (index) => {
    this.setState({
      focused: this.state.focused === index ? null : index,
    });
  };

  render() {
    return (
      <div id="scroll_me" style={{ height: '800px', overflowY: 'scroll' }}>
        <div>
          <Flipper
            flipKey={this.state.focused}
            className="staggered-list-content"
            spring="noWobble"
            staggerConfig={{
              card: {
                reverse: this.state.focused !== null,
              },
            }}
            decisionData={this.state.focused}
            onStart={(data) => {
              setTimeout(() => {
                document.querySelector('#scroll_me').scrollTo({
                  top: 300,
                  left: 0,
                  behavior: 'smooth',
                });
              }, 1000);
            }}>
            <ul className="list">
              {listData.map((index) => {
                return (
                  <li key={index}>
                    {index === this.state.focused ? (
                      <ExpandedListItem
                        index={this.state.focused}
                        onClick={this.onClick}
                      />
                    ) : (
                      <ListItem
                        index={index}
                        key={index}
                        onClick={this.onClick}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </Flipper>
        </div>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AnimatedList />, rootElement);

export default AnimatedList;
