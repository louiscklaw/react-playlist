import React from 'react';

import './App.css';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function App(props) {
  const markdown = `
# This is a header
## This is a header
### This is a header
#### This is a header
##### This is a header
###### This is a header

And this is a paragraph **bold**

> And this is a paragraph **bold**

This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.

helloworld

Some basic Git commands are:
\`\`\`
git status
git add
git commit
\`\`\`

@octocat :+1: This PR looks great - it's ready to merge! :shipit:



- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:


// @prefix init_lorem_ipsum
// @description init_lorem_ipsum

待進變果沒致友環健問水法代人苦天。
業立臺四即文善公作有往，等怕準命小電個。
査今聞光洋後化外財強主職。

🌲🔯🍣💵 🐪👫🐈📅📍🎻💼 🐣🍖🐻📩🍨. 🎇👬💨

Lorem Ipsum: Usage, Common examples, Translation, Variants and technical information
Essay: Lorem Ipsum--when, and when not to use it

🌲🔯🍣💵 🐪👫🐈📅📍🎻💼 🐣🍖🐻📩🍨. 🎇👬💨

阪ハウワ応92勤常勉旋72依過らつ。門むば隊就メツヘ突長山テ碁人ゆッ
歳両ら止都トカハキ締素ぎぜつ索能経初臣こ党求ぼ担効カタハネ文会ヲツレ端作67神フ測相りち挑坂ぶ。
応ハシカ向2捜せぽけリ覧郷ユヤワサ準助7子群メソマ直林無ノヱク総九るね法
右み料生レソヱ犯2属スタリチ海新志合のみル。落国がどゅト備初

국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기
 위하여 국민경제자문회의를 둘 수 있다, 누구든지 법률에 의하지 아니하고는
  체포·구속·압수·수색 또는 심문을 받지 아니하며, 이를 규제·조정할 수 있다.

Lorem
der of human happiness. No one rejects, dislikes,
or avoids pleasure itself, because it is pleasure,
but because those who do not know how to pursue pleasure rationally
encounter consequences that are extremely painful. Nor again is there

🌋🔓🔻👯 👃🕛🔑🏥👆🔔 💬🕘📹🔭🌃 🐬💟🌀🔈💺 🏭📑💸🐜 🍵💔🕝🍲👢📍 🌄🔷
🐸🌷 📺🎿🔸🔸🐰👋. 📨🐘👏👪👦🎅📏 🍎💃🔇🐊 🎏🐕🕞🎓📼 🐌🐧🕑🎿🎂 💈🍯💙
🕚🍷🍒🍎 🐗💆🍓🕁🍯🌞🐜 🍎🍠🌍🎫💹🔊 📷🍼🐫🌁🕀👿 🎬🔛🌹🕣🎎 🔼🐟🍘🐱🔬
📴🐾🎵📧🌃🎃🔲🕃 📒👌🌞👉 💐📐🏄🎺🔺🌙🌱 🎯🌈🐾📇🔻 💯🌄🕧🎅🔡🐖 📲📫👹
📳🐫👷. 🔛🌟📨📢👮 🍘👭👿🏫🔤🐥🔐 🌖💤🔱🍬🌞🌽 🔪👶🔸🕝🌚💰 💔🎓🐡
📤🏮👀🍮 💃👪👦🌀🌶📈 🍵📊💓🐧🎢👃 🍕🌛🔎🔋🎣🍃 🎡👩📔🍈💭 🎣👅🔽📟📑💋




![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)


list ?

  - item 1
  - item 2
  - item 3
  - item 4
    - sub 4.1
      - sub 4.1.1
  - item 5
  - item 6


numbered list ?

  1. item 1
  1. item 2
  1. item 3
  1. item 4
  1. item 5
  1. item 6





<custom test="test_props">
hello code
</custom>
`;

  const markdown1 = `Just a link: https://reactjs.com.`;

  return (
    <>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  );
}

export default App;
