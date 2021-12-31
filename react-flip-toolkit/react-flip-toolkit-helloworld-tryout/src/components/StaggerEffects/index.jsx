import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';

import './styles.css';

const listData = [...Array(20).keys()];
const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick }) => {
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
};

const ExpandedListItem = ({ index, onClick }) => {
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

export default () => {
  const [state, setState] = React.useState({ focused: null });
  const [click_focus, setClickFocus] = React.useState(null);
  const outer_ref = React.useRef();

  const onClick = (index) => {
    setClickFocus(index);
    setState({
      focused: state.focused === index ? null : index,
    });
  };

  const scrollList = () => {
    outer_ref.current.current_top = outer_ref.current.current_top || 0;
    const scroll_distance =
      (96 + 10) * click_focus - outer_ref.current.current_top;
    console.log('test', scroll_distance);
    outer_ref.current.scrollTo({
      top: scroll_distance,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div ref={outer_ref} style={{ height: '800px', overflowY: 'scroll' }}>
        <Flipper
          flipKey={state.focused}
          className="staggered-list-content"
          spring="gentle"
          staggerConfig={{
            card: { reverse: state.focused !== null },
          }}
          decisionData={state.focused}
          onStart={scrollList}>
          <ul className="list">
            {listData.map((index) => {
              return (
                <li key={index}>
                  {index === state.focused ? (
                    <ExpandedListItem index={state.focused} onClick={onClick} />
                  ) : (
                    <ListItem index={index} key={index} onClick={onClick} />
                  )}
                </li>
              );
            })}
          </ul>
        </Flipper>
      </div>
    </>
  );
};

// class AnimatedList extends Component {
//   state = { focused: null };
//   onClick = (index) =>
//     this.setState({
//       focused: this.state.focused === index ? null : index,
//     });
//   render() {
//     return (
//       <Flipper
//         flipKey={this.state.focused}
//         className="staggered-list-content"
//         spring="gentle"
//         staggerConfig={{
//           card: {
//             reverse: this.state.focused !== null,
//           },
//         }}
//         decisionData={this.state.focused}>
//         <ul className="list">
//           {listData.map((index) => {
//             return (
//               <li key={index}>
//                 {index === this.state.focused ? (
//                   <ExpandedListItem
//                     index={this.state.focused}
//                     onClick={this.onClick}
//                   />
//                 ) : (
//                   <ListItem index={index} key={index} onClick={this.onClick} />
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </Flipper>
//     );
//   }
// }

// export default AnimatedList;
