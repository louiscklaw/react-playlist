import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';

import helloworld_base64 from './HelloworldSVG';

import './styles.css';

const listData = [...Array(20).keys()].map((i) => {
  return {
    hello: 'world',
    food_img: 'https://source.unsplash.com/random',
    food_name: `Food name ${i}`,
    food_description: `food description ${i}`,
  };
});

const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick, food_detail }) => {
  let { food_img } = food_detail;
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
              // delayUntil={createCardFlipId(index)}
            >
              <div
                className="avatar"
                style={{
                  backgroundImage: `url('${helloworld_base64}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}></div>
            </Flipped>
            <div className="description">
              <Flipped
                flipId={`description-${index}`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                // delayUntil={createCardFlipId(index)}
              >
                <div>
                  위하여 국민경제자문회의를 둘 수 있다, 누구든지 법률에 의하
                </div>
              </Flipped>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, onClick, food_detail }) => {
  let { food_img } = food_detail;

  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      // onStart={(el) => {
      //   setTimeout(() => {
      //     el.classList.add('animated-in');
      //   }, 4000);
      // }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}>
              <div
                className="avatar avatarExpanded"
                style={{
                  backgroundImage: `url('${helloworld_base64}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}></div>
            </Flipped>
            <div className="description">
              <Flipped
                flipId={`description-${index}`}
                stagger="card-content"
                delayUntil={createCardFlipId(index)}>
                <div>
                  위하여 국민경제자문회의를 둘 수 있다, 누구든지 법률에 의하
                </div>
              </Flipped>
            </div>
            <div className="additional-content">
              <div>
                阪ハウワ応92勤常勉旋72依過らつ。門むば隊就メツヘ突長山テ碁人ゆッ
                歳両ら止都トカハキ締素ぎぜつ索能経初臣こ党求ぼ担効カタハネ文会ヲツレ端作67神フ測相りち挑坂ぶ。
                応ハシカ向2捜せぽけリ覧郷ユヤワサ準助7子群メソマ直林無ノヱク総九るね法
                右み料生レソヱ犯2属スタリチ海新志合のみル。落国がどゅト備初
              </div>
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
    setState({ focused: state.focused === index ? null : index });
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
          spring="noWobble"
          staggerConfig={{ card: { reverse: state.focused !== null } }}
          decisionData={state.focused}
          onStart={scrollList}>
          <ul className="list">
            {listData.map((o, index) => {
              return (
                <li key={index}>
                  {index === state.focused ? (
                    <ExpandedListItem
                      index={state.focused}
                      onClick={onClick}
                      food_detail={o}
                    />
                  ) : (
                    <ListItem
                      index={index}
                      key={index}
                      onClick={onClick}
                      food_detail={o}
                    />
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
