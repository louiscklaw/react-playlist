import React, { Component, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';

import './styles.css';

const listData = [...Array(7).keys()];
const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick }) => {
  let list_item_ref = useRef();

  useEffect(() => {
    console.log('list_item_ref', list_item_ref.current.offsetTop);
  }, [list_item_ref]);
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}>
      <div
        className="listItem"
        onClick={() => onClick(index, list_item_ref.current.offsetTop)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <div ref={list_item_ref}>hello content</div>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}>
              <div className="avatar" />
            </Flipped>
            <div className="description">
              {`key_${index}`}
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
      <div className="expandedListItem" onClick={() => onClick(index, null)}>
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

const AnimatedList = ({ scroll_ref }) => {
  let [focused, setFocused] = useState(null);
  let [last_top, setLastTop] = useState(0);

  const onClick = (index, item_offset_top) => {
    // consider: clicking on expanded item
    // setFocused(focused === index ? null : index);
    if (focused === index) {
      setFocused(null);
    } else {
      setFocused(index);
    }

    // console.log('scroll_ref', { scroll_ref });
  };

  return (
    <>
      <Flipper
        flipKey={focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{ card: { reverse: focused !== null } }}
        decisionData={focused}>
        <div style={{ top: '500px' }}>
          <ul
            className="list"
            style={{ backgroundColor: focused ? 'red' : 'white' }}>
            {listData.map((index) => (
              <>
                <li key={index} id={`key_${index}`}>
                  {index === focused ? (
                    <ExpandedListItem index={focused} onClick={onClick} />
                  ) : (
                    <ListItem index={index} key={index} onClick={onClick} />
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      </Flipper>
      helloworld flipper
    </>
  );
};

// class AnimatedList extends Component {
//   state = { focused: null };
//   onClick = (index) => {
//     this.setState({ focused: this.state.focused === index ? null : index });

//     if (this.state.focused) {
//       // scroll element to top
//     } else {
//       // fallback
//       document
//         .querySelector(
//           '#root > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.home-root.css-1fikoij-MuiPaper-root'
//         )
//         .scrollTo(0, 202 - 56);
//     }
//   };

//   render() {
//     return (
//       <Flipper
//         flipKey={this.state.focused}
//         className="staggered-list-content"
//         spring="gentle"
//         staggerConfig={{ card: { reverse: this.state.focused !== null } }}
//         decisionData={this.state.focused}>
//         <div style={{ top: '500px' }}>
//           <ul
//             id={'test'}
//             className="list"
//             style={{
//               backgroundColor: this.state.focused ? 'red' : 'yellow',
//             }}>
//             {listData.map((index) => {
//               return (
//                 <li key={index} id={`key_${index}`}>
//                   {index === this.state.focused ? (
//                     <ExpandedListItem
//                       index={this.state.focused}
//                       onClick={this.onClick}
//                     />
//                   ) : (
//                     <ListItem
//                       index={index}
//                       key={index}
//                       onClick={this.onClick}
//                     />
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </Flipper>
//     );
//   }
// }

export default AnimatedList;
